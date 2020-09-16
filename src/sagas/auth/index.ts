import {all, fork} from "redux-saga/effects";
import {doRegisterAction} from "./register";
import {doLoginAction} from "./login";

function* authSagas() {
  yield all([fork(doRegisterAction), fork(doLoginAction)]);
}

export default authSagas;