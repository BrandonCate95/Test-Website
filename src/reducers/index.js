import { combineReducers } from 'redux'
import user from './user'
import addpage from './addpage'

export default combineReducers({
    //reducer list
    addpage,
    user
})