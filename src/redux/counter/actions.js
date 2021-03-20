import { INCREMENT, DECREMENT, CHANGE_STEP } from "./counterTypes";

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: { value },
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: { value },
  };
};

const change_step = (value) => {
  return {
    type: CHANGE_STEP,
    payload: { value },
  };
};

export default { increment, decrement, change_step };
