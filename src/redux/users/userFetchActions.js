import {
  USER_REQUEST_FETCH,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
} from "./userActionTypes";
import axios from "axios";

const fetchUserRequest = () => {
  return {
    type: USER_REQUEST_FETCH,
  };
};

const fetchUserRequestSuccess = (user) => {
  return {
    type: USER_REQUEST_SUCCESS,
    payload: user,
  };
};

const fetchUserRequestError = (error) => {
  return {
    type: USER_REQUEST_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserRequestSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserRequestError(errorMsg));
      });
  };
};
