import React from 'react'

const Error = ({ message }) => {
    return (
        <div>
            <div
                className="min-w-screen h-screen animated fadeIn faster fixed left-1/2 top-1/2 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover  -translate-y-1/2 -translate-x-1/2"
                id="modal-id">
                <div className="absolute opacity-80 inset-0 z-0"></div>
                <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-slate-500">
                    {/* <div className='flex flex-row bg-gray-900 h-10 w-[400px] rounded-[30px]'>
                <span className='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'></span>
                <div className='w-[10%] bg-green-400 rounded-r-2xl shadow-[0_0_20px_#00C85177]'></div>
            </div> */}
                    <hr className='my-3'>
                        <div className='flex flex-row bg-gray-900 h-10 w-[400px] rounded-[30px]'>
                            <span className='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>{message}</span>
                            <div className='w-[10%] bg-red-400 rounded-r-2xl shadow-[0_0_20px_#ff444477]'></div>
                        </div>
                    </hr>
                </div>
            </div>
            {/* <hr className='my-3'>
                <div className='flex flex-row bg-gray-900 h-10 w-[400px] rounded-[30px]'>
                    <span className='flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center'>Missing information</span>
                    <div className='w-[10%] bg-yellow-400 rounded-r-2xl shadow-[0_0_20px_#ffbb3377]'></div>
                </div>
            </hr> */}

        </div>

    )
}

export default Error
