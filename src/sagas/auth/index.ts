import {all, fork} from "redux-saga/effects";
import {doRegisterAction} from "./register";
import {doLoginAction} from "./login";
import {doMeAction} from "./me";

function* authSagas() {
  yield all([fork(doRegisterAction), fork(doLoginAction), fork(doMeAction)]);
}

export default authSagas;