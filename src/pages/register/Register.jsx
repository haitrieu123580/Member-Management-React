import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Register = () => {
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const registerSubmit = async (data) => {
        data.gender = (data.gender === "female")
        data.age = parseInt(data.age)
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.post('http://127.0.0.1:3000/auth/register', JSON.stringify(data), config)
            if (response.status === 201) {
                setMessage('Register Successfully, Login plz')
                setIsError(false)
                reset()
            }
            else if (response.status === 200) {
                setMessage('Register Failed, Username already existed')
                setIsError(true)
                reset()
            }
            else {
                setIsError(true)
                setMessage('Register Failed, Check your infomation again')
            }
        } catch (error) {
            setMessage('Error')
        }
    }
    return (
        <div className='h-screen flex justify-center items-center'>

            <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
                {message !== '' &&
                    <>
                        {isError ? (<h1 className='text-red-500'>{message}</h1>) : (<h1 className='text-green-500'>{message}</h1>)}
                    </>}
                <h1 className="text-2xl font-semibold mb-4 text-black">Sign up</h1>
                <form onSubmit={handleSubmit(registerSubmit)}>
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
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="password"
                            className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
                            placeholder="Confirm Password"
                            {...register('confirmPassword')}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
                            placeholder="Enter your Email"
                            {...register('email')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-black">Gender</label>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="male"
                                    {...register('gender')}
                                />
                                <span className="ml-2 text-black">Male</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    value="female"
                                    {...register('gender')}
                                />
                                <span className="ml-2 text-black">Female</span>
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
                            placeholder="Fullname"
                            {...register('name')}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            className="text-black mt-1 px-3 py-2 w-full border rounded-lg focus:ring focus:ring-indigo-200"
                            placeholder="Age"
                            {...register('age')}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
