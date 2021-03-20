import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, CHANGE_STEP } from "./counterTypes";

const valueReducer = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload.value;
    case DECREMENT:
      return state - action.payload.value < 1
        ? state
        : state - action.payload.value;
    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return action.payload.value;
    default:
      return state;
  }
};

const reducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default reducer;
