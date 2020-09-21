/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Head from "next/head";
import Content from "../../components/Layout/Content";
import LoginForm from "../../containers/auth/LoginForm";
import {useIsAuth} from "../../shared/useIsAuth";

export default function Login() {
  useIsAuth(false);

  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </Content>
  )
}