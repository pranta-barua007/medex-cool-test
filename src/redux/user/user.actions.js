import jwt_decode from 'jwt-decode';

import { UserActionTypes } from './user.types';
import { httpLogin } from '../../requests/requests';

export const logInStart = () => (
    {
        type: UserActionTypes.LOG_IN_START,
    }
);

export const logInSuccess = user => (
    {
        type: UserActionTypes.LOG_IN_SUCCESS,
        payload: user
    }
);

export const logInFailure = error => (
    {
        type: UserActionTypes.LOG_IN_FAILURE,
        payload: error
    }
);

export const requestLogin = (email, password) => async (dispatch) => {
    dispatch(logInStart());
    try {
        const callAPI = await httpLogin(email, password);
        const data = await callAPI.text();
        if (callAPI.status === 401) {
            throw new Error(data);
        }
        dispatch(logInSuccess(jwt_decode(data)));
        window.localStorage.setItem('token', data);
    }catch(err) {
        dispatch(logInFailure(err.message));
    }
};

export const logOutStart = () => (
    {
        type: UserActionTypes.LOG_OUT_START,
    }
);

export const logOutSuccess = () => (
    {
        type: UserActionTypes.LOG_OUT_SUCCESS,
        payload: null
    }
);

export const logOutFailure = error => (
    {
        type: UserActionTypes.LOG_OUT_FAILURE,
        payload: error
    }
);

export const requestLogOut = () => (dispatch) => {
    dispatch(logOutStart());
    try {
        dispatch(logOutSuccess());
        window.localStorage.clear();
    } catch (error) {
        dispatch(logOutFailure(error.message));
    }
};

export const checkUserSession = () => (dispatch) => {
    const token = window.localStorage.getItem('token');
    if(!token) return;

    try {
        dispatch(logInSuccess(jwt_decode(token)));
    }catch (err) {
        dispatch(logInFailure(err.message));
    }
};

