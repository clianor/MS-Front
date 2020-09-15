/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Content from "../../components/Layout/Content";
import LoginForm from "../../containers/auth/LoginForm";

export default function Login() {
  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <LoginForm />
    </Content>
  )
}