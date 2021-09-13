import { deviceActionsTypes } from "./devices.types";
import { httpGetDevices } from "../../requests/requests";

export const fetchDevicesStart = () => (
    {
        type: deviceActionsTypes.FETCH_DEVICES_START,
    }
);

export const fetchDevicesSuccess = devicesData => (
    {
        type: deviceActionsTypes.FETCH_DEVICES_SUCCESS,
        payload: devicesData
    }
);

export const fetchDevicesFailure = error => (
    {
        type: deviceActionsTypes.FETCH_DEVICES_FAILED,
        payload: error
    }
);

export const requestDevices = () => async (dispatch) => {
    dispatch(fetchDevicesStart());
    try {
        const callApi = httpGetDevices();
        const data = await callApi;
        dispatch(fetchDevicesSuccess(data['devices'])); 
    }catch(err) {
        dispatch(fetchDevicesFailure(err.message));
    }
};