import React, { useState, useEffect } from 'react';
import User from '../User/User';
import ButtonAddUser from '../User/ButtonAddUser';
import UserForm from '../User/UserForm';
import Error from '../Error/Error';
// import { useAuth } from '../../context/Auth';
// import axios from 'axios';
import { fetchUsers, createUser, updateUser, deleteUserAction } from '../../features/userList/usersAction';
import { useSelector, useDispatch } from 'react-redux';

const Users = () => {
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const usersList = useSelector(state => state.usersList);
    const { userToken } = useSelector((state) =>  state.auth)

    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(userToken)
        dispatch(fetchUsers({accessToken: userToken}));
      }, [dispatch, userToken]);
    const handleSave = async (formData) => {
        if (editUser === null) {
            dispatch(createUser({formData: formData, accessToken: userToken}))
        } else {
            dispatch(updateUser({formData: formData, accessToken: userToken, userId: parseInt(editUser.id)}))
            setEditUser(null);
        }
    };


    const handleEdit = (user) => {
        setEditUser(user);
    };

    const deleteUser = async (id) => {
        dispatch(deleteUserAction({accessToken: userToken, userId: id}))
    };
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
                            {usersList.map((user) => (
                                <User
                                    user={user}
                                    key={user.username}
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
