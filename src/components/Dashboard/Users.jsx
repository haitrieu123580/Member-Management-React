import React, { useState, useEffect } from 'react';
import User from '../User/User';
import ButtonAddUser from '../User/ButtonAddUser';
import UserForm from '../User/UserForm';
import usersData from '../../assets/userData'; 

const Users = () => {
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [users, setUsers] = useState(usersData);

    const handleSave = (formData) => {
        if (editUser === null) {
            // Add new user
            const id = Math.floor(Math.random() * 10000) + 1;
            // const newUser = { ...formData, id };
            setUsers((prevUsers) => {
                const newUser = { ...formData, id };
                const updatedUsers = [...prevUsers, newUser];
                localStorage.setItem('users', JSON.stringify(updatedUsers));
                return updatedUsers;
            });
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

    const deleteUser = (id) => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.filter((user) => user.id !== id);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
    };

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
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
                                <th scope="col" className="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    #
                                </th>
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
