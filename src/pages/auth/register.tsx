/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import Head from "next/head";
import Content from "../../components/Layout/Content";
import RegisterForm from "../../containers/auth/RegisterForm";
import {useIsAuth} from "../../shared/useIsAuth";

export default function Register() {
  useIsAuth(false);

  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm />
    </Content>
  )
}