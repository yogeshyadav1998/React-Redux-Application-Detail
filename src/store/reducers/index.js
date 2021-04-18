import {combineReducers} from 'redux';

import fetchapps from './fetch_apps';

export default combineReducers({
    fetchapps: fetchapps
})