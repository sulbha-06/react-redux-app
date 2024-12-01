import {
  USER_REQUEST_FETCH,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
} from "./userActionTypes";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST_FETCH:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
