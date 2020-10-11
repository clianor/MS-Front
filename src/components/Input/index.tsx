/** @jsx jsx */
import em from "@emotion/styled";
import {jsx} from "@emotion/core";
import {InputHTMLAttributes} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelText?: string;
}

const Input = ({labelText, ...rest}: InputProps) => {
  return (
    <>
      {labelText && <label htmlFor={rest["id"]}>{labelText}</label>}
      <StyledInput {...rest} />
    </>
  );
}

const StyledInput = em.input`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #E6E9F4;
  box-sizing: border-box;
  outline: none;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: inherit;
`;

export default Input;