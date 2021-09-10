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
        const callAPI = httpLogin(email, password);
        const data = await callAPI;
        const errMessage = 'Invalid email and password combination';
        if (data && data === errMessage) {
            throw new Error(errMessage);
        }
        window.localStorage.setItem('token', data)
        dispatch(logInSuccess(jwt_decode(data)))
    }catch(err) {
        dispatch(logInFailure(err.message))
    }
};