import {call, put, takeLatest} from "@redux-saga/core/effects";
import {LOGOUT_REQUEST, logoutSuccessAction} from "../../reducer/auth/logout";
import {AxiosRequestConfig} from "axios";
import axiosInstance from "../../shared/axiosInstance";
import {errorAction} from "../../reducer/auth";

function logoutApi() {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "/api/auth/logout",
  }

  return axiosInstance(options);
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
