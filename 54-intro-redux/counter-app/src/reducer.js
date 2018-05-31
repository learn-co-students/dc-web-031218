import { combineReducers } from "redux";
const initialState = { count: 0, stepSize: 5 };

const stepSize = (state = initialState.stepSize, action) => {
  switch (action.type) {
    case "CHANGE_STEP_SIZE":
      return action.payload.stepSize;
    default:
      return state;
  }
};

const count = (state = initialState.count, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload.amount;
    case "DECREMENT":
      return state - action.payload.amount;
    default:
      return state;
  }
};

export default combineReducers({ count, stepSize });
