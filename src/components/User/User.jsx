import React from 'react'

const User = ({user,onClick,onDeleteUser}) => {
  return (
    <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-white-700 dark:text-white-400">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white-900">
      {user.id}
    </td>
    <td class="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
      {user.username}
    </td>
    <td class="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
      {user.email}
    </td>
    <td class="text-sm text-white-900 x-6 py-4 whitespace-nowrap">
      {user.gender}
    </td>
    <td class="text-sm text-white-900 px-6 py-4 whitespace-nowrap">
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