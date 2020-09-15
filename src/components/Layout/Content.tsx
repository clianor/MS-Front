import em from "@emotion/styled";
import {HeaderHeight} from "../../shared/layoutConstans";
import {HTMLAttributes} from "react";

const LayoutContent = ({children, ...rest}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Content {...rest}>
      {children}
    </Content>
  );
}

const Content = em.main`
  display: block;
  text-align: center;
  height: calc(100vh - ${HeaderHeight});
`;

export default LayoutContent;