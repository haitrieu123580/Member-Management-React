import React from 'react'
import * as types from '../../redux/auth/actionType'
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/Auth';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Login = () => {
  const {  user } = useSelector((state) => state.auth)
  
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // // redirect authenticated user to profile screen
  useEffect(() => {
    if (user) {
      navigate('/home')
    }
  }, [navigate, user])

  const submitForm = (data) => {
    dispatch({
      type: types.LOGIN_START,
      user: data,
      onSuccess: (data) => {
        console.log('dang nhap thanh cong')
        navigate("/home");
        // window.location.reload();

      },
      onError: (data) => {
        console.log('dang nhap thanh cong')
      },

    })
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your username"
              {...register('username')}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              {...register('password')}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>

  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };

export default Login
