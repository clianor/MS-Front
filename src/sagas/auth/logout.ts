import {call, put, takeLatest} from "@redux-saga/core/effects";
import {LOGOUT_REQUEST, logoutSuccessAction} from "../../reducer/auth/logout";
import axios, {AxiosRequestConfig} from "axios";
import {errorAction} from "../../reducer/auth";

function logoutApi() {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${process.env.ServerURL}/api/auth/logout`,
    withCredentials: true,
  }

  return axios(options);
}

function* logoutSagaAction() {
  try {
    yield call(logoutApi);
    yield put(logoutSuccessAction());
  } catch (error) {
    yield put(errorAction(error.response.data));
  }
}

export function* doLogoutAction() {
  yield takeLatest(LOGOUT_REQUEST, logoutSagaAction);
}
