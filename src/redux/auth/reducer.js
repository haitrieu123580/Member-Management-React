import * as types from './actionType'
const initState = {
    token: localStorage.getItem('token')||null,
    user: localStorage.getItem('user')||null,
    userId: localStorage.getItem('userId')||null,
    error: null,
    message: null,
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.accessToken,
                user: action.payload.message.username,
                userId: action.payload.message.id,
                message: 'Login thanh cong',
                error: null
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                message: 'Login that bai',
                error: null
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                user: null,
                userId: null,
                message: null,
                error: null
            }
        default:
            return state;
    }
}
export default authReducer;