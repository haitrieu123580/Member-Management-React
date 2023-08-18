import React, { useState, useEffect, useContext } from 'react';
import User from '../User/User';
import ButtonAddUser from '../User/ButtonAddUser';
import UserForm from '../User/UserForm';
import { useAuth } from '../../context/Auth';
import axios from 'axios';
const Users = () => {
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [users, setUsers] = useState([]);
    const { token } = useAuth()
    // console.log(token)
    const handleSave = async (formData) => {
        if (editUser === null) {
            try {
                const res = await axios.post('http://localhost:3000/users/create-user', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                });
                console.log(formData)
                console.log(res)
                if (res.status === 200) {
                    setUsers((prevUsers) => {
                        const newUser = { ...formData };
                        const updatedUsers = [...prevUsers, newUser];
                        return updatedUsers;
                    });
                }
            } catch (error) {

            }
        } else {
            setUsers((prevUsers) => {
                const updatedUsers = prevUsers.map((user) =>
                    user === editUser ? { ...user, ...formData } : user
                );
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                return updatedUsers;
            });
            setEditUser(null);
        }
    };

    const handleEdit = (user) => {
        setEditUser(user);
    };

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/users/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(res)
            if (res.status === 200) {
                setUsers((prevUsers) => {
                    const updatedUsers = prevUsers.filter((user) => user.id !== id);
                    return updatedUsers;
                });
            }
            else if (res.status === 404) {

            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/users/get-users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64 relative">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto ">
                    <div className="w-full overflow-x-auto flex justify-between my-4">
                        <h1>List of Users And Action with User</h1>
                        <ButtonAddUser
                            text={'Add User'}
                            onShowUserForm={() => {
                                setShowForm(true);
                                setIsEdit(false);
                            }}
                        />
                        {showForm && (
                            <UserForm
                                onSave={handleSave}
                                initialValues={isEdit ? editUser : null}
                                hideForm={() => setShowForm(false)}
                            />
                        )}
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                {/* <th scope="col" className="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    #
                                </th> */}
                                <th scope="col" className="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    User name
                                </th>
                                <th scope="col" className="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    Email
                                </th>
                                <th scope="col" className="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    Gender
                                </th>
                                <th scope="col" className="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                            {users.map((user) => (
                                <User
                                    user={user}
                                    key={user.id}
                                    onClick={() => {
                                        handleEdit(user);
                                        setShowForm(true);
                                        setIsEdit(true);
                                    }}
                                    onDeleteUser={deleteUser}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
