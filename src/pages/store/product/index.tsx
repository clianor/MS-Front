/** @jsx jsx */
import Head from "next/head";
import Content from "../../../components/Layout/Content";
import {jsx} from "@emotion/core";
import {useIsAuth} from "../../../shared/useIsAuth";
import {serverSideProps} from "../../../shared/serverSideAuth";
import ProductSection from "../../../layouts/ProductSection";
import ProductCreateSection from "../../../layouts/ProductCreateSection";

export default function Product(props: any) {
  useIsAuth(true, props.meState);

  return (
    <>
      <Head>
        <title>Store Home Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Content>
        <ProductSection />
        <ProductCreateSection />
      </Content>
    </>
  )
}

export const getServerSideProps = serverSideProps;
