import { all } from "redux-saga/effects";

/**
 * function*은 제너레이터 펑션을 의미
 * 제너레이터 객체를 반환한다.
 */
export default function* rootSaga() {
  yield all([])
}