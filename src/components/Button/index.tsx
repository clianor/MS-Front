/** @jsx jsx */
import {ButtonHTMLAttributes, ReactNode} from "react";
import em from "@emotion/styled";
import {jsx, css} from "@emotion/core";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: "primary" | "secondary" | "tertiary";
  size?: "small" | "middle" | "big";
  isLoading?: boolean;
  children: ReactNode;
}

const Button = ({children, theme = "primary", size = "small", isLoading = false, ...rest}: ButtonProps) => {
  return (
    <StyledButton css={[themes[theme], sizes[size]]} disabled={isLoading} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = em.button`
  outline: none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  height: 2rem;
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
  &:disabled, &:disabled:hover, &:disabled:active {
    background-color: lightgray;
    cursor: not-allowed;
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

const sizes = {
  small: css`
    font-size: 0.875rem;
    line-height: 1rem;
    height: 2rem;
  `,
  middle: css`
    font-size: 1rem;
    line-height: 1.125rem;
    height: 2.125rem;
  `,
  big: css`
    font-size: 1.125rem;
    line-height: 1.25rem;
    height: 2.25rem;
  `,
}

export default Button;