/** @jsx jsx */
import Head from "next/head";
import Content from "../components/Layout/Content";
import {jsx, css} from "@emotion/core";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Content>
        <section css={sectionStyle}>
          <div>
            <h4>마이-스토어</h4>
            <p>마스(마이스토어)는 여러분의 가게의 물류의 흐름을 추적하여 부족한 품목을 알려주는 서비스입니다.</p>
          </div>
        </section>
      </Content>
    </>
  )
}

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
  background-image: url("/landing_page.jpg");
  background-size: cover;
  background-position: center;
  & > div {
    border-radius: 0.5rem;
    padding: 2rem;
    padding-bottom: 18vh; 
  }
  h4 {
    display: inline-block;
    color: #fff;
    font-size: 14vw;
    padding-top: 2vw;
    font-family: 'Black Han Sans', sans-serif;
  }
  p {
    display: inline-block;
    color: #fff;
    font-size: 4vw;
    line-height: 5vw;
    word-break: keep-all;
    margin-top: 1.25rem;
  }
  @media screen and (max-width: 320px) {
    & > div {
      padding: 1rem;
    }
  }
`