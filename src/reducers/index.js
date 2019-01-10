import {combineReducers} from 'redux'
import messageReducer from './messageReducers'

export default combineReducers({
  messageShow: messageReducer
});
