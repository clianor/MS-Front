import em from "@emotion/styled";
import {HeaderHeight} from "../../shared/layoutConstans";
import {HTMLAttributes} from "react";

const Content = em.main`
  display: block;
  text-align: center;
  height: calc(100vh - ${HeaderHeight});
  background-color: #D5D7E3;
`;

const LayoutContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Content>
      {props.children}
    </Content>
  );
}

export default LayoutContent;