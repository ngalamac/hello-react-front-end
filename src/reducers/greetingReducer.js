// src/reducers/greetingReducer.js
import { GET_RANDOM_GREETING } from '../actions/greetingActions';

const initialState = {
  greeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_GREETING:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
