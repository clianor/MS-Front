import {call, put, takeLatest} from "@redux-saga/core/effects";
import {ME_REQUEST, ME_SET, meSetAction, meSuccessAction} from "../../reducer/auth/me";
import axios, {AxiosRequestConfig} from "axios";
import {errorAction} from "../../reducer/auth";

function meApi(data: any) {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "http://localhost:8000/api/auth/me",
    withCredentials: true,
  };

  if (data?.cookie) {
    options["headers"] = {
      Cookie: data.cookie,
    };
  }

  return axios(options);
}

function* meSagaAction(action: any) {
  try {
    if (action.type === ME_REQUEST) {
      const result = yield call(meApi, action.data);
      yield put(meSuccessAction(result.data.user));
    } else if (action.type === ME_SET) {
      yield put(meSetAction(action.data));
    }
  } catch (error) {
    yield put(errorAction(error.response.data));
  }
}

export function* doMeAction() {
  yield takeLatest(ME_REQUEST, meSagaAction);
}
