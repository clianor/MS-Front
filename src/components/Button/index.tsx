import {ReactNode} from "react";
import em from "@emotion/styled";

interface ButtonProps {
  theme?: 'primary' | 'secondary' | 'tertiary';
  children?: ReactNode;
}

const ButtonStyle = em.button`
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

const Button = (props: ButtonProps) => {
  return (
    <>
      <ButtonStyle>{props.children}</ButtonStyle>
    </>
  );
}

export default Button;