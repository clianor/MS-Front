/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Head from "next/head";
import Content from "../../components/Layout/Content";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logoutAction} from "../../reducer/auth/logout";
import {useRouter} from "next/router";

export default function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutAction());
    router.push("/");
  }, []);

  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <Head>
        <title>Logout</title>
      </Head>
      </Content>
  )
}

