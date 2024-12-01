import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import travelReducer from './reducer/travel';
import { combineReducers } from 'redux';
import { travelPackagesReducer } from './reducer/travelpackage';
import { cartReducer } from './reducer/cartReducers';

const rootReducer = combineReducers({
    travelReducer,
    travelPackages: travelPackagesReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
