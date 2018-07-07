import { combineReducers } from 'redux';

import user from './userReducer';
import department from './departmentReducer';
import employee from './employeeReducer';

export default combineReducers({
    user,
    department,
    employee
});