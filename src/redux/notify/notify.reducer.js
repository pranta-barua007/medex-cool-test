import { notifyActionTypes } from "./notify.types";

const INITIAL_STATE = {
    isPending: false,
    error: null,
    notifyStatus: false,
    notifyMessage: '',
};

export const notifyReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case notifyActionTypes.NOTIFY_START:
            return {
                ...state,
                isPending: true
            }
        case notifyActionTypes.NOTIFY_SUCCESS:
            return {
                ...state,
                notifyStatus: true,
                notifyMessage: action.payload,
                isPending: false,
                error: null
            }
        case notifyActionTypes.NOTIFY_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default: 
            return state;
    }
};
