import {RegisterState, REGISTER_INITIALIZE, REGISTER_REQUEST, REGISTER_SUCCESS} from "./register";
import {LOGIN_INITIALIZE, LOGIN_REQUEST, LOGIN_SUCCESS, LoginState} from "./login";

type FormType = "register" | "login";

export type AuthState = {
  login: LoginState;
  register: RegisterState;
  authorization: string;
  errors?: [
    {
      field: string,
      message: string,
    },
  ] | [],
};

export const initialState: AuthState = {
  login: {
    email: "",
    password: "",
    success: false,
    isLoading: false,
  },
  register: {
    email: "",
    password: "",
    passwordConfirm: "",
    companyName: "",
    success: false,
    isLoading: false,
  },
  authorization: "",
  errors: [],
};

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const LOAD_TOKEN = "auth/LOAD_TOKEN";
export const SET_ERROR = 'auth/ERROR';

export const changeFieldAction = (data: any) => {
  return {
    type: CHANGE_FIELD,
    data,
  };
};

export const loadTokenAction = (data: any) => {
  return {
    type: LOAD_TOKEN,
    data,
  }
};

export const errorAction = (data: any) => {
  return {
    type: SET_ERROR,
    data,
  };
};

const reducer = (state = initialState, payload: any) => {
  switch (payload.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [payload.data.formType]: {
          ...state[payload.data.formType as FormType],
          [payload.data.key]: payload.data.value,
        },
      };
    case LOAD_TOKEN:
      return {
        ...state,
      };
    case REGISTER_INITIALIZE:
      return {
        ...state,
        "register": {
          ...initialState.register,
        },
        "errors": [],
      }
    case LOGIN_INITIALIZE:
      return {
        ...state,
        "login": {
          ...initialState.login,
        },
        "errors": [],
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        "register": {
          ...payload.data,
          isLoading: true,
        },
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        "login": {
          ...payload.data,
          isLoading: true,
        },
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        "register": {
          ...state["register"],
          isLoading: false,
          success: true,
        },
        authorization: payload.data.authorization,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        "login": {
          ...state["login"],
          isLoading: false,
          success: true,
        },
        authorization: payload.data.authorization,
      }
    case SET_ERROR:
      return {
        ...state,
        "register": {
          ...state["register"],
          isLoading: false,
        },
        "login": {
          ...state["login"],
          isLoading: false,
        },
        authorization: "",
        errors: payload.data.errors,
      };
    default:
      return state;
  }
};

export default reducer;