import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { devicesReducer } from './devices/devices.reducer';

const rootReducer = combineReducers(
    {
       user: userReducer,
       devices: devicesReducer
    }
);

export default rootReducer;