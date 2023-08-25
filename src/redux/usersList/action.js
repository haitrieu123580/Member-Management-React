import * as types from './actionType'

export const getUsersList = () => ({
  type: types.GET_USERS_START,
});

export const getUsersListSuccess = (usersList) => ({
  type: types.GET_USERS_SUCCESS,
  payload: usersList
});

export const getUsersListFailure = error => ({
  type: types.GET_USERS_FAILURE,
  payload: { error }
});

export const deleteUserStart = ()=>({
    type: types.DELETE_USER_START
})

export const deleteUserSuccess =(id)=>({
    type: types.DELETE_USER_SUCCESS, 
    payload: id
})

export const addUserStart = (data)=>({
    type: types.ADD_USER_START,
    payload: data
})

export const addUserSuccess = (user)=>({
    type: types.ADD_USER_SUCCESS, 
    payload: user
})
export const updateUserStart = (data)=>({
    type: types.UPDATE_USER_START,
    payload: data
})

export const updateUserSuccess = (data)=>({
    type: types.UPDATE_USER_SUCCESS, 
    payload: data
})