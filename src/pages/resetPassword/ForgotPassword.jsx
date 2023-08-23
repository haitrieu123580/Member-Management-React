import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const ForgotPassword = () => {
    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const sendToken = async (data) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.post('http://127.0.0.1:3000/auth/forgot-password', JSON.stringify(data), config)
            if (response.data.type === 'success') {
                setMessage('Check your Email Plz!')
                setIsError(false)
                setShowButton(true)
                reset()
            }
            else if (response.data.type === 'error') {
                setMessage('Email not valid')
                setIsError(true)
                setShowButton(false)
                reset()
            }
            else {
                setMessage('Error')
                setShowButton(false)
                setIsError(true)
            }
        } catch (error) {
        }
    }
    return (
        <div className=''>
            <div className='h-screen flex justify-center items-center'>
                <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
                    <div className="px-8 mb-4 text-center">
                        {message !== '' &&
                            <>
                                {isError ? (<h1 className='text-red-500'>{message}</h1>) : (<h1 className='text-green-500'>{message}</h1>)}
                            </>}
                        <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                        <p className="mb-4 text-sm text-gray-700">
                            We get it, stuff happens. Just enter your email address below and we'll send you a
                            token to reset your password!
                        </p>
                    </div>
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit(sendToken)}>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter Email Address..."
                                {...register('email')}
                            />
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                className="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                                type="submit"
                            >
                                Send
                            </button>
                        </div>
                        <hr className="mb-6 border-t" />
                        <div className="mb-4">
                            <div className="text-center">
                                <Link
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    to={'/register'}
                                >
                                    Create an Account!
                                </Link>
                            </div>
                            <div className="text-center">
                                <Link
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="/login"
                                >
                                    Already have an account? Login!
                                </Link>
                            </div>
                        </div>
                        {showButton &&
                            <div className="mb-4 text-center ">
                                <Link to={'/reset-password'}
                                    className="block w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
                                >
                                    Continue
                                </Link>
                            </div>}

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
