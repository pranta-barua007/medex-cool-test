import { notifyActionTypes } from "./notify.types";
import { notifyData } from "../../data/notify-data";
import { httpPostNotify } from "../../requests/requests";

export const notifyStart = () => (
    {
        type: notifyActionTypes.NOTIFY_START,
    }
);

export const notifySuccess = notifyMessage => (
    {
        type: notifyActionTypes.NOTIFY_SUCCESS,
        payload: notifyMessage
    }
);

export const notifyFailure = error => (
    {
        type: notifyActionTypes.NOTIFY_FAILED,
        payload: error
    }
);

export const requestNotify = () => async (dispatch) => {
    dispatch(notifyStart());
    try {
        const callAPI = await httpPostNotify(notifyData);
        const data = await callAPI.text();
       
        if (callAPI.status === 400 || callAPI.status === 401) {
            throw new Error(data);
        }
        dispatch(notifySuccess(data));
    }catch(err) {
        dispatch(notifyFailure(err.message));
    }
};