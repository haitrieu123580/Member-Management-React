import React from 'react'

const User = ({ user, onClick, onDeleteUser }) => {
  return (
    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-white-700 dark:text-white-400">
      {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white-900">
      {user.id ||'##'}
    </td> */}
      <td className="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
        {user.username}
      </td>
      <td className="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
        {user.email}
      </td>
      <td className="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
        {user.gender ? (<span className='text-pink-600'>Female</span>) : (<span className='text-blue-600'>Male</span>)}
      </td>
      <td className="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
        <button className='mr-2 text-green-500' onClick={onClick}>
          Update
        </button>
        <button className='text-red-500' onClick={() => onDeleteUser(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}


export default User
