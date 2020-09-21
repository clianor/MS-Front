import {GetServerSidePropsContext} from "next";
// import {Store} from "redux";
// import {sagaStore} from "../store";
import {meAction} from "../reducer/auth/me";
import {END} from "@redux-saga/core";

export interface ServerSidePropsContext extends GetServerSidePropsContext {
  store: any,
}

export const ServerSidePropsMeAuth = async (context: ServerSidePropsContext) => {
  const {store, req} = context;
  store.dispatch(meAction({cookie: req.headers.cookie}));
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return store.getState();
}