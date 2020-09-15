/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import Content from "../../components/Layout/Content";
import AuthLayout from "../../components/Layout/AuthLayout";

export default function Register() {
  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <AuthLayout type="register" />
    </Content>
  )
}