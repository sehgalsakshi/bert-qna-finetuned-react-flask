import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../redux/reducer/RootReducer';
import thunk from 'redux-thunk';

export const store = configureStore()

function configureStore() {
    const customMiddleware = ({dispatch}) => next => action => {
    next(action);
}
  return createStore(RootReducer, applyMiddleware(thunk, customMiddleware));
}