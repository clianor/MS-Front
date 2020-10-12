import {call, put, takeLatest} from "@redux-saga/core/effects";
import {ME_REQUEST, ME_SET, meSetAction, meSuccessAction} from "../../reducer/auth/me";
import {AxiosRequestConfig} from "axios";
import axiosInstance from "../../shared/axiosInstance";
import {errorAction} from "../../reducer/auth";

function meApi(data: any) {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "/api/auth/me",
  };

  if (data?.cookie) {
    options["headers"] = {
      Cookie: data.cookie,
    };
  }

  return axiosInstance(options);
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
    yield put(errorAction(error.response ? error.response.data : {errors: []}));
  }
}

export function* doMeAction() {
  yield takeLatest(ME_REQUEST, meSagaAction);
}
