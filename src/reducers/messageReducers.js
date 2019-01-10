import {SUCCESS_MESSAGE} from '../actions/types';

const initialState = {
  isAuth: 0,
  message: {}
}

export default function(state = initialState, action) {
    switch(action.type){
      case SUCCESS_MESSAGE:
      return{
        ...state,
        message: action.payload
      };
      default:
      return state;

    }
}
