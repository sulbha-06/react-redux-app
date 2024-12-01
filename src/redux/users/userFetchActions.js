import {
  USER_REQUEST_FETCH,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
} from "./userActionTypes";

export const fetchUserRequest = () => {
  return {
    type: USER_REQUEST_FETCH,
  };
};

export const fetchUserRequestSuccess = (user) => {
  return {
    type: USER_REQUEST_SUCCESS,
    payload: user,
  };
};

export const fetchUserRequestError = (error) => {
  return {
    type: USER_REQUEST_ERROR,
    payload: error,
  };
};
