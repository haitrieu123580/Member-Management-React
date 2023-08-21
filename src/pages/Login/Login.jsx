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
      console.log(res.data.message)
      if (res.status === 200) {
        setToken(res.data.accessToken);
        setUser(res.data.message);
        localStorage.setItem('accessToken', res.data.accessToken)
        navigate('/home');       
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
      <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your username"
              onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              onChange={handleChange} />
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200">
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
