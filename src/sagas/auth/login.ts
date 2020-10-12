import {takeLatest, call, put} from "@redux-saga/core/effects";
import {LOGIN_REQUEST, LoginState, loginSuccessAction} from "../../reducer/auth/login";
import {AxiosRequestConfig} from "axios";
import axiosInstance from "../../shared/axiosInstance";
import {errorAction} from "../../reducer/auth";
import qs from 'qs';

function loginApi(data: LoginState) {
  const {email, password} = data;

  const options: AxiosRequestConfig = {
    method: "POST",
    url:"/api/auth/login",
    data: qs.stringify({
      email,
      password,
    }),
  }

  return axiosInstance(options);
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
