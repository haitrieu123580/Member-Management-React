import axios from "axios";
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};
export const LoginApi = async (data) => {
    const response = await axios.post(`http://localhost:3000/auth/login`, JSON.stringify(data), config);
    return response
}

export const RegisterApi = async (data) =>
    await axios.post(`http://localhost:3000/auth/register`, data);

export const GetAllUserApi = async (token) => {
    const response = await axios.get(`http://localhost:3000/users/get-all`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}

export const DeleteUserApi = async ({ token, id }) => {
    const response = await axios.delete(`http://localhost:3000/users/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}

export const UpdateUserApi = async ({ token, id, data }) => {
    const response = await axios.put(`http://localhost:3000/users/${id}`, data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    return response
}
export const AddUserApi = async ({ token,  data }) => {
    const response = await axios.post(`http://localhost:3000/users/create-user`, data,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    return response
}

