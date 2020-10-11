import React, {ChangeEvent, TextareaHTMLAttributes} from "react";
import em from "@emotion/styled";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
  setValue: Function;
  placeholder?: string;
};

const TextArea = ({ value, setValue, placeholder, ...rest }: TextAreaProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <StyledTextArea value={value} onChange={handleChange} placeholder={placeholder} {...rest} />
  );
};

const StyledTextArea = em.textarea`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #E6E9F4;
  box-sizing: border-box;
  resize: none;
  outline: none;
  padding: 0.75rem 1rem;
  font-family: inherit;
  font-size: inherit;
`;

export default TextArea;
