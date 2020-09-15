/** @jsx jsx */
import {ReactNode} from "react";
import em from "@emotion/styled";
import {jsx, css} from "@emotion/core";

type ButtonProps = {
  theme: "primary" | "secondary" | "tertiary";
  onClick?: Function;
  children: ReactNode;
}

const Button = ({ children, theme="primary", onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} css={[themes[theme]]}>
      {children}
    </StyledButton>
  );
}

const StyledButton = em.button`
  outline: none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  line-height: 1;
  font-weight: 600;
  background-color: #fff;
  cursor: pointer;
  &:focus {
    outline: solid
    box-shadow: 0px 0px 8px rgba(87, 184, 255, 0.2);
  }
  &:hover {
    background-color: #0058FF;
    color: #fff;
  }
  &:active {
    background-color: #333;
    color: #fff;
  }
`;

const themes = {
  primary: css`
    border: 1px solid #E6E9F4;
    background-color: #2185D0;
    color: #fff;
  `,
  secondary: css`
    border: 1px solid #E6E9F4;
  `,
  tertiary: css`
    border: 1px solid #fff;
  `
};

export default Button;