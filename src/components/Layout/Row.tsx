/** @jsx jsx */
import em from "@emotion/styled";
import {ButtonHTMLAttributes, ReactNode} from "react";
import {jsx, css} from "@emotion/core";

type RowProps = ButtonHTMLAttributes<HTMLDivElement> & {
  size?: "small" | "middle" | "big";
  children: ReactNode;
}

const Row = ({children, size="small", ...rest}: RowProps) => {
  return (
    <StyledRow css={[sizes[size]]} {...rest}>
      {children}
    </StyledRow>
  );
}

const StyledRow = em.div`
  display: flex;
`;

const sizes = {
  small: css`
    & > * + * { margin-left: 1rem; }
  `,
  middle: css`
    & > * + * { margin-left: 1.25rem; }
  `,
  big: css`
    & > * + * { margin-left: 1.5rem; }
  `,
}

export default Row;
