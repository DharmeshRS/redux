import { DECREMENT, INCREMENT } from "./action-type";

export const incrementVal = () => {
  return {
    type: INCREMENT
  };
};

export const decrementVal = () => {
  return {
    type: DECREMENT
  };
};
