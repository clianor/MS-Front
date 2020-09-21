import {RegisterState, REGISTER_INITIALIZE, REGISTER_REQUEST, REGISTER_SUCCESS} from "./register";
import {LoginState, LOGIN_INITIALIZE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./login";
import {MeState, ME_SUCCESS, ME_FAILURE, ME_REQUEST, ME_SET} from "./me";
import {LOGOUT_SUCCESS} from "./logout";

type FormType = "register" | "login";

export type AuthState = {
  login: LoginState;
  register: RegisterState;
  me: MeState
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
  me: {
    id: "",
    email: "",
    companyName: "",
    isLoading: false,
  },
  errors: [],
};

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const SET_ERROR = 'auth/ERROR';

export const changeFieldAction = (data: any) => {
  return {
    type: CHANGE_FIELD,
    data,
  };
};

export const errorAction = (data: any) => {
  return {
    type: SET_ERROR,
    data,
  };
};

const reducer = (state = initialState, payload: any) => {
  switch (payload.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        "me": {
          ...initialState.me,
        },
      }
    case ME_SET:
      return {
        ...state,
        "me": {
          ...payload.data,
        }
      }
    case ME_REQUEST:
      return {
        ...state,
        "me": {
          ...state.me,
          isLoading: true,
        },
      }
    case ME_SUCCESS:
      return {
        ...state,
        "me": {
          ...payload.data,
          isLoading: false,
        },
      }
    case ME_FAILURE:
      return {
        ...state,
        "me": {
          ...initialState.me,
          isLoading: false,
        },
      }
    case CHANGE_FIELD:
      return {
        ...state,
        [payload.data.formType]: {
          ...state[payload.data.formType as FormType],
          [payload.data.key]: payload.data.value,
        },
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
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        "login": {
          ...state["login"],
          isLoading: false,
          success: true,
        },
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
        "me": {
          ...state["me"],
          isLoading: false,
        },
        errors: payload.data.errors,
      };
    default:
      return state;
  }
};

export default reducer;