import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes"

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
};
export const boundLogin = (email, password) => dispatch(login(email, password));

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
};

export function loginRequest(email, password) {

}

export function logout() {
  return {
    type: LOGOUT,
  };
};
export const boundLogout = () => dispatch(logout());

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
};

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

  export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};