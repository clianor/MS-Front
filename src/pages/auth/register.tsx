/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import Content from "../../components/Layout/Content";
import RegisterForm from "../../containers/auth/RegisterForm";

export default function Register() {
  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <RegisterForm />
    </Content>
  )
}