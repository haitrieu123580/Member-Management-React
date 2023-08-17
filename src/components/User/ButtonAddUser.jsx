import React from 'react'

const ButtonAddUser = ({text, onShowUserForm}) => {
  return (
    <button 
        className='btn bg-cyan-500 px-2 py-2 text-lg shadow rounded-full'
        onClick={onShowUserForm}>
        {text}
    </button>
  )
}

export default ButtonAddUser
