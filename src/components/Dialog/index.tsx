/** @jsx jsx */
import {MouseEvent} from "react";
import {jsx, css} from '@emotion/core';
import Button from "../Button";
import em from "@emotion/styled";
import {useEffect, useState} from "react";

type DialogProps = {
  title?: string;
  message?: string;
  onCancel?: (event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
  onCancelMessage?: string;
  onSuccess?: (event: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => void;
  onSuccessMessage?: string;
};

const Dialog = ({
    title,
    message,
    onCancel,
    onSuccess,
    onCancelMessage,
    onSuccessMessage,
  }: DialogProps) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <>
      <div css={[fullScreenStyle, darkLayerStyle]}></div>
      <div css={[fullScreenStyle, whiteBoxWrapperStyle]}>
        <div css={[whiteBoxStyle, css`opacity: ${opacity};`]}>
          {title && <h3>{title}</h3>}
          {message && <p>{message}</p>}
          <ButtonGroup>
            {onCancelMessage && <Button theme="tertiary" onClick={onCancel}>{onCancelMessage}</Button>}
            {onSuccessMessage && <Button onClick={onSuccess}>{onSuccessMessage}</Button>}
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

const fullScreenStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayerStyle = css`
  z-index: 10;
  background-color: rgba(0,0,0,0.5);
`;

const whiteBoxWrapperStyle = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const whiteBoxStyle = css`
  z-index: 16;
  box-sizing: border-box;
  border-radius: 0.25rem;
  width: 25rem;
  background-color: #fff;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: all .5s;
  
  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;

const ButtonGroup = em.div`
  float: right;
  height: 100%;
  padding: 0 1rem;
  font-size: 2rem;
  margin-top: 2rem;
  & > button {
    margin-left: 1rem;
  }
`;

export default Dialog;
