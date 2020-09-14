import {HTMLAttributes} from "react";
import Head from "next/head";
import em from "@emotion/styled";
import {useRouter} from "next/router";
import {HeaderHeight} from "../../shared/layoutConstans";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: any;
  extra?: any[];
}

const Header = em.header`
  display: block;
  height: ${HeaderHeight};
  border-bottom: 1px solid #E6E9F4;
  box-shadow: 0 1px 5px 1px #E6E9F4;
`;

const HeaderTitle = em.span`
  display: inline-block;
  height: 100%;
  padding: 0 1rem;
  text-align: center;
  line-height: ${HeaderHeight};
  font-size: 2rem;
  font-family: 'Black Han Sans', sans-serif;
  cursor: pointer;
  user-select: none;
`;

const HeaderExtra = em.span`
  display: inline-block;
  float: right;
  height: 100%;
  padding: 0 1rem;
  font-size: 2rem;
  
  & > * {
    margin-left: 1rem;
  }
`;

const LayoutHeader = ({title, extra}: HeaderProps) => {
  const router = useRouter();

  return (
    <Header>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
      </Head>
      <HeaderTitle onClick={() => router.push("/")}>{title}</HeaderTitle>
      <HeaderExtra>
        {extra}
      </HeaderExtra>
    </Header>
  );
};

export default LayoutHeader;