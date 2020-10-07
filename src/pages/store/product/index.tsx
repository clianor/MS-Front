/** @jsx jsx */
import Head from "next/head";
import Content from "../../../components/Layout/Content";
import {jsx} from "@emotion/core";
import {useIsAuth} from "../../../shared/useIsAuth";
import {serverSideProps} from "../../../shared/serverSideAuth";
import ProductSection from "../../../layouts/ProductSection";

export default function Product(props: any) {
  useIsAuth(true, props.meState);

  return (
    <>
      <Head>
        <title>Store Home Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Content css={{

      }}>
        <ProductSection />
        <section>
          <div>이미지</div>
          <div>
            <div>버튼 row</div>
            <div>단위</div>
            <div>설명</div>
          </div>
        </section>
      </Content>
    </>
  )
}

export const getServerSideProps = serverSideProps;
