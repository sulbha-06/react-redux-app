import { BUY_CAKE } from "./cakeActionTypes";
const initialState = {
  numberOfCake: 10,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake:
          state.numberOfCake > 0
            ? state.numberOfCake - action.payload
            : state.numberOfCake,
      };
    default:
      return state;
  }
};
export default cakeReducer;
