import {ReactNode} from "react";
import em from "@emotion/styled";

type ButtonProps = {
  theme?: "primary" | "secondary" | "tertiary";
  onClick?: Function;
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

const StyledButton = em.button`
  outline: none;
  border: 1px solid #E6E9F4;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  background-color: #fff;
  cursor: pointer;
  &:focus {
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

export default Button;