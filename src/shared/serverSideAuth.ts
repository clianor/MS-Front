import {GetServerSidePropsContext} from "next";
import {meAction} from "../reducer/auth/me";
import {END} from "@redux-saga/core";
import {wrapper} from "../store";

export interface ServerSidePropsContext extends GetServerSidePropsContext {
  store: any,
}

export const ServerSidePropsMeAuth = async (context: ServerSidePropsContext) => {
  const {store, req} = context;
  store.dispatch(meAction({cookie: req.headers.cookie}));
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return store.getState().auth.me;
}

export const serverSideProps = wrapper.getServerSideProps(async (context: ServerSidePropsContext) => {
  return {
    props: {
      meState: await ServerSidePropsMeAuth(context),
    },
  }
});