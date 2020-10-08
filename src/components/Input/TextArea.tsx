import React, {TextareaHTMLAttributes} from "react";
import em from "@emotion/styled";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
};

const TextArea = ({ ...rest }: TextAreaProps) => {
  return (
    <StyledTextArea {...rest} />
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
