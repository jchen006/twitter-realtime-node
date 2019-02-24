import { combineReducers } from 'redux'
import simpleReducer from './simpleReducer'
import googleReducer from './googleReducer'
import twitterReducer from './twitterReducer'

export default combineReducers({
    simpleReducer,
    googleReducer,
    twitterReducer
});