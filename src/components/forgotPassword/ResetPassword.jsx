import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import axios from "axios";
import { useDispatch } from "react-redux";
import * as types from '../../redux/auth/actionType'
const ResetPassword = () => {
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const resetPass = async (data) => {
        dispatch({
            type: types.RESET_PWD_START, 
            data: data,
            onSuccess: (message) =>{

            }, 
            onError: (message) =>{

            }
        })
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
                <div className="px-8 mb-4 text-center">
                    {message !== '' &&
                        <>
                            {isError ? (<h1 className='text-red-500'>{message}</h1>) : (<h1 className='text-green-500'>{message}</h1>)}
                        </>}
                    <h3 className="pt-4 mb-2 text-2xl text-black">Reset your password</h3>
                </div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit(resetPass)}>
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
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="otp">
                            OTP
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="otp"
                            type="text"
                            placeholder="Enter OTP..."
                            {...register('passwordResetToken')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            New password
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="newPassword"
                            type="password"
                            placeholder="Enter New Password..."
                            {...register('newPassword')}
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
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
