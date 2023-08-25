import * as types from './actionType';

const initState = {
    usersList: [],
    error: null,
    message: null,
};

export const usersListReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                usersList: action.payload,
            };

        case types.GET_USERS_FAILURE:
            return {
                ...state,
                error: 'Can not get users list',
            };

        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.payload),
            };
        case types.ADD_USER_SUCCESS:
            return {
                ...state,
                usersList: [...state.usersList, action.payload], // Thêm người dùng mới vào mảng cũ
            };
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload.updateData;
                    }
                    return user;
                }),
            };
        default:
            return state;
    }
};

export default usersListReducer;
