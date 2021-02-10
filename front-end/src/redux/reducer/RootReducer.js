import { combineReducers } from 'redux';
import modelReducer from './ModelReducer'
import errorReducer from './ErrorReducer'

const RootReducer = combineReducers({
    modelReducer,
    errorReducer
});

export default RootReducer;