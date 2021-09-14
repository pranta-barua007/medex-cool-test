import { deviceActionsTypes } from "./devices.types";

const INITIAL_STATE = {
    devicesData: [],
    isPending: false,
    error: null,
    notify: false,
    notifyMessage: '',
    notifyErr: null
};

export const devicesReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case deviceActionsTypes.FETCH_DEVICES_START:
        case deviceActionsTypes.NOTIFY_START:
            return {
                ...state,
                isPending: true
            }
        case deviceActionsTypes.FETCH_DEVICES_SUCCESS:
            return {
                ...state,
                devicesData: action.payload,
                isPending: false,
                error: null
            }
        case deviceActionsTypes.FETCH_DEVICES_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        case deviceActionsTypes.NOTIFY_SUCCESS:
            return {
                ...state,
                notify: true,
                notifyMessage: action.payload,
                isPending: false
            }
        case deviceActionsTypes.NOTIFY_FAILED:
            return {
                ...state,
                notifyErr: action.payload,
                isPending: false
            }
        default: 
            return state;
    }
};
