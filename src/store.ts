import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware, {Task} from 'redux-saga';
import {Context, createWrapper, MakeStore} from "next-redux-wrapper"
import rootReducer from "./reducer";
import rootSaga from "./sagas";
import {AuthState} from "./reducer/auth";

export type State = {
  auth: AuthState;
}

export interface sagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore = (context: Context) => {
  // 미들웨어 생성
  const sagaMiddleware = createSagaMiddleware();

  // 미들웨어 적용한 스토어 생성
  const store: sagaStore = createStore(
    rootReducer,
    process.env.NODE_ENV === "production"
        ? applyMiddleware(sagaMiddleware)
        : composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // 사가를 서버에서 실행
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 스토어 리턴
  return store;
};

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "production" ? false : true,
});
