import {all, fork} from "redux-saga/effects";
import {doRegisterAction} from "./register";

function* authSagas() {
  yield all([fork(doRegisterAction)]);
}

export default authSagas;