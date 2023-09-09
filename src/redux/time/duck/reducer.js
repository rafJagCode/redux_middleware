import types from "./types";

const initialState = {
  currentTime: new Date().toString(),
};

const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TIME: {
      return { ...state, currentTime: action.payload };
    }
    default:
      return state;
  }
};

export default timeReducer;
