import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { devicesReducer } from './devices/devices.reducer';
import { notifyReducer } from './notify/notify.reducer';

const rootReducer = combineReducers(
    {
       user: userReducer,
       devices: devicesReducer,
       notify: notifyReducer
    }
);

export default rootReducer;