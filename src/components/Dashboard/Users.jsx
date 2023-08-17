import React from 'react'
import { useState } from 'react'
import User from '../User/User'
import ButtonAddUser from '../User/ButtonAddUser'
import UserForm from '../User/UserForm'
const Users = () => {
    const [showForm, setShowForm] = useState(false)
    const [editUser, setEditUser] = useState(null);
    const [isEdit, setIsEdit]  = useState(false)
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                username: "user1",
                email: "user1@example.com",
                gender: "male"
            },
            {
                id: 2,
                username: "user2",
                email: "user2@example.com",
                gender: "female"
            },
            {
                id: 3,
                username: "user3",
                email: "user3@example.com",
                gender: "male"
            },
            {
                id: 4,
                username: "user4",
                email: "user4@example.com",
                gender: "female"
            },
            {
                id: 5,
                username: "user5",
                email: "user5@example.com",
                gender: "male"
            },
            {
                id: 6,
                username: "user6",
                email: "user6@example.com",
                gender: "female"
            },
            {
                id: 7,
                username: "user7",
                email: "user7@example.com",
                gender: "male"
            },
            {
                id: 8,
                username: "user8",
                email: "user8@example.com",
                gender: "female"
            },
            {
                id: 9,
                username: "user9",
                email: "user9@example.com",
                gender: "male"
            },
            {
                id: 10,
                username: "user10",
                email: "user10@example.com",
                gender: "female"
            }
        ]
    );

    const handleSave = (formData) => {
        if (editUser === null) {
            // Add new user
            const id = Math.floor(Math.random() * 10000) + 1;
            const newUser = { ...formData, id };
            setUsers((prevUsers) => [...prevUsers, newUser]);
        } else {
            // Update existing user
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user === editUser ? { ...user, ...formData } : user
                )
            );
            setEditUser(null);
        }
    };

    const handleEdit = (user) => {
        setEditUser(user);
    };
    const deleteUser = (id) => {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== id)
        )
    }
    return (

        <div class="mt-4 mx-0 w-full">
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto ">
                    <div class="w-full overflow-x-auto flex justify-between my-4">
                        <h1>List of Users And Action with User</h1>
                        <ButtonAddUser text={'Add User'} onShowUserForm={() => {setShowForm(true); setIsEdit(false)}} />
                        {showForm && <UserForm onSave={handleSave} initialValues={isEdit ? editUser : null} hideForm={() => setShowForm(false)} />}
                    </div>

                    <table class="w-full">
                        <thead>
                            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                <th scope="col" class="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" class="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    User name
                                </th>
                                <th scope="col" class="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    Email
                                </th>
                                <th scope="col" class="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    Gender
                                </th>
                                <th scope="col" class="text-lg font-medium text-white-900 px-6 py-4 text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                            {users.map((user) => (<User user={user} key={user.id} onClick={() => { handleEdit(user); setShowForm(true); setIsEdit(true) }} onDeleteUser={deleteUser} />))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Users
