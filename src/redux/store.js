import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import travelReducer from './reducer/travel';

const store = createStore(travelReducer, applyMiddleware(thunk));

export default store;
