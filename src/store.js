import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './reducers/greetingReducer';

const initialState = {
  greeting: '', // Set an initial state
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
