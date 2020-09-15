/** @jsx jsx */
import AuthLayout from "../../components/Layout/AuthLayout";
import {css, jsx} from "@emotion/core";
import Content from "../../components/Layout/Content";

export default function Login() {
  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <AuthLayout type="login" />
    </Content>
  )
}