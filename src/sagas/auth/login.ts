import {takeLatest, call, put} from "@redux-saga/core/effects";
import {LOGIN_REQUEST, LoginState, loginSuccessAction} from "../../reducer/auth/login";
import axios, {AxiosRequestConfig} from "axios";
import {errorAction} from "../../reducer/auth";
import qs from 'qs';

function loginApi(data: LoginState) {
  const {email, password} = data;

  const options: AxiosRequestConfig = {
    method: "POST",
    url: "http://localhost:8000/api/auth/login",
    data: qs.stringify({
      email,
      password,
    }),
    withCredentials: true,
  }

  return axios(options);
}

function* loginSagaAction(action: any) {
  try {
    const result = yield call(loginApi, action.data);
    yield put(loginSuccessAction(result.data));
  } catch (error) {
    yield put(errorAction(error.response.data));
  }
}

export function* doLoginAction() {
  yield takeLatest(LOGIN_REQUEST, loginSagaAction);
}
