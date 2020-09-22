/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import Head from "next/head";
import Content from "../../components/Layout/Content";
import RegisterForm from "../../containers/auth/RegisterForm";
import {useIsAuth} from "../../shared/useIsAuth";
import {wrapper} from "../../store";
import {ServerSidePropsContext, ServerSidePropsMeAuth} from "../../shared/serverSideAuth";

export default function Register(props: any) {
  useIsAuth(false, props.meState);

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

export const getServerSideProps = wrapper.getServerSideProps(async (context: ServerSidePropsContext) => {
  return {
    props: {
      meState: await ServerSidePropsMeAuth(context),
    },
  }
});
