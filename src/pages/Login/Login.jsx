
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const Login = () => {
  const {  userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/home')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch({ type: 'auth/login', payload: data });
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
        <h1 className="text-2xl font-semibold mb-4 text-black">Login</h1>
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
        <div className="mb-3 font-sembold text-sm flex justify-between">
          <Link to={'/forgot-password'}
            className='text-blue-500'>
            Forgot password
          </Link>
          <Link to={'/register'}
            className='text-blue-500'>
            Register
          </Link>
        </div>

      </div>
    </div>

  )
}


export default Login
