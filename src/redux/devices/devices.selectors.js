import {createSelector} from 'reselect';

const selectDevices = state => state.devices;

export const selectDevicesIsPending = createSelector(
    [selectDevices],
    (devices) => devices.isPending
);

export const selectDevicesData = createSelector(
    [selectDevices],
    (devices) => devices.devicesData
);

export const selectDevicesIsFailed = createSelector(
    [selectDevices],
    (devices) => devices.error
);