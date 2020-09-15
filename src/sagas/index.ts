import {all, call} from "redux-saga/effects";
import auth from "./auth";

/**
 * function*은 제너레이터 펑션을 의미
 * 제너레이터 객체를 반환한다.
 */
export default function* rootSaga() {
  yield all([call(auth)]);
}