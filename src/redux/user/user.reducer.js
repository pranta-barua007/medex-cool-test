import {UserActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isPending: false,
    error: null
};

export const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.LOG_IN_START:
        case UserActionTypes.LOG_OUT_START:
            return {
                ...state,
                isPending: true
            }
        case UserActionTypes.LOG_IN_SUCCESS:
        case UserActionTypes.LOG_OUT_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isPending: false,
                error: null
            }
        case UserActionTypes.LOG_IN_FAILURE:
        case UserActionTypes.LOG_OUT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default: 
            return state;
    }
};
