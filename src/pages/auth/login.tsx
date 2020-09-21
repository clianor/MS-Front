/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Head from "next/head";
import Content from "../../components/Layout/Content";
import LoginForm from "../../containers/auth/LoginForm";
import {useIsAuth} from "../../shared/useIsAuth";
import {wrapper} from "../../store";
import {ServerSidePropsContext, ServerSidePropsMeAuth} from "../../shared/serverSideAuth";

export default function Login(props: any) {
  useIsAuth(false, props.state.auth.me);

  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm/>
    </Content>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async (context: ServerSidePropsContext) => {
  return {
    props: {
      state: await ServerSidePropsMeAuth(context),
    },
  }
});
