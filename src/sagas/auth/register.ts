import {takeLatest, call, put} from "@redux-saga/core/effects";
import {REGISTER_REQUEST, RegisterState, registerSuccessAction} from "../../reducer/auth/register";
import axios, {AxiosRequestConfig} from "axios";
import {errorAction} from "../../reducer/auth";
import qs from 'qs';

function registerApi(data: RegisterState) {
  const {email, password, passwordConfirm, companyName} = data;

  const options: AxiosRequestConfig = {
    method: "POST",
    url: `${process.env.ServerURL}/api/auth/register`,
    data: qs.stringify({
      email,
      password,
      passwordConfirm,
      companyName,
    }),
    withCredentials: true,
  }

  return axios(options);
}

function* registerSagaAction(action: any) {
  try {
    const result = yield call(registerApi, action.data);
    yield put(registerSuccessAction(result.data));
  } catch (error) {
    yield put(errorAction(error.response.data));
  }
}

export function* doRegisterAction() {
  yield takeLatest(REGISTER_REQUEST, registerSagaAction);
}
