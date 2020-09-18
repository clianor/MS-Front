/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Content from "../../components/Layout/Content";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logoutAction} from "../../reducer/auth/logout";
import {useRouter} from "next/router";
import {useIsAuth} from "../../shared/useIsAuth";

export default function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();

  useIsAuth(false);

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
      </Content>
  )
}