import {call, put, takeLatest} from "@redux-saga/core/effects";
import {ME_REQUEST, meSuccessAction} from "../../reducer/auth/me";
import axios, {AxiosRequestConfig} from "axios";
import {errorAction} from "../../reducer/auth";

function meApi() {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "http://localhost:8000/api/auth/me",
    withCredentials: true,
  }

  return axios(options);
}

function* meSagaAction() {
  try {
    const result = yield call(meApi)
    yield put(meSuccessAction({me: result.data.user}));
  } catch (error) {
    yield put(errorAction(error.response.data));
  }
}

export function* doMeAction() {
  yield takeLatest(ME_REQUEST, meSagaAction);
}
