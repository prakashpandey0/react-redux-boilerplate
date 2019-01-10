import {SUCCESS_MESSAGE} from './types';

export const successMessage = () => {
  return {
    type: SUCCESS_MESSAGE,
    payload: "This is a success message"
  };
}
