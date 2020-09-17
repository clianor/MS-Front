import {all, fork} from "redux-saga/effects";
import {doRegisterAction} from "./register";
import {doLoginAction} from "./login";
import {doMeAction} from "./me";
import {doLogoutAction} from "./logout";

function* authSagas() {
  yield all([fork(doRegisterAction), fork(doLoginAction), fork(doMeAction), fork(doLogoutAction)]);
}

export default authSagas;