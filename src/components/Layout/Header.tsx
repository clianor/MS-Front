import {HTMLAttributes} from "react";
import Head from "next/head";
import Link from "next/link";
import em from "@emotion/styled";
import {useRouter} from "next/router";
import {HeaderHeight} from "../../shared/layoutConstans";
import {useSelector} from "react-redux";
import {State} from "../../store";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: any;
  loginMenu?: any[];
  extra?: any[];
}

const LayoutHeader = ({title, loginMenu, extra}: HeaderProps) => {
  const router = useRouter();
  const {id} = useSelector((state: State) => state.auth.me)

  return (
    <Header>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <HeaderTitle onClick={() => router.push(id ? "/store" : "/")}>{title}</HeaderTitle>
      <HeaderMenu>
        {
          id && (
            loginMenu?.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                {item.text}
              </Link>
            ))
          )
        }
      </HeaderMenu>
      <HeaderExtra>
        {extra}
      </HeaderExtra>
    </Header>
  );
};

const Header = em.header`
  display: flex;
  justify-content: space-between;
  height: ${HeaderHeight};
  border-bottom: 1px solid #E6E9F4;
  box-shadow: 0 1px 5px 1px #E6E9F4;
`;

const HeaderTitle = em.div`
  height: 100%;
  padding: 0 1rem;
  text-align: center;
  line-height: ${HeaderHeight};
  font-size: 2rem;
  font-family: 'Black Han Sans', sans-serif;
  cursor: pointer;
  user-select: none;
  word-break: keep-all;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderMenu = em.div`
  height: 100%;
  line-height: ${HeaderHeight};
  overflow: hidden;
  & > a {
    display: inline-block;
    height: 100%;
    text-decoration: none;
    margin: 0 0.5rem;
  }
  & > a:hover {
    border-bottom: 0.15rem solid #0058FF;
  }
`;

const HeaderExtra = em.div`
  float: right;
  height: 100%;
  padding: 0 1rem;
  font-size: 2rem;
  & > * {
    margin-left: 1rem;
  }
`;

export default LayoutHeader;