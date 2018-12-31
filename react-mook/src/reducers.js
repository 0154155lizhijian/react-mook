//合并所有的reducer
import {combineReducers} from 'redux'
import {auth} from './Auth.redux'


export default combineReducers({auth})