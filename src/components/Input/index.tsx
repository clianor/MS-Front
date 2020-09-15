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
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export default Input;