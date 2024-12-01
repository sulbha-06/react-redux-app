import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import userReducer from "./users/userReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer,
});

export default rootReducer;
