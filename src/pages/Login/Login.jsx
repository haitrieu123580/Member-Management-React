import React from 'react'
import axios from "axios";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
const Login = () => {
  const { setToken, setUser } = useAuth();
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", credentials);
      console.log(res)
      if (res.status === 200) {
        setToken(res.data.accessToken);
        setUser(res.data.message);
        navigate('/dashboard');       
      }
      else{
        navigate('/')
      }

    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      <div class="bg-white p-8 rounded shadow-md w-96 h-fit">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your username"
              onChange={handleChange} />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              onChange={handleChange} />
          </div>
          <button
            onClick={handleClick}
            type="submit"
            class="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
            Log in
          </button>
        </form>
      </div>
    </div>

  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

export default Login
