export const LOGOUT_REQUEST = "auth/LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "auth/LOGOUT_FAILURE";

export const logoutAction = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccessAction = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
