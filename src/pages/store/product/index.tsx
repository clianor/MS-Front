import Head from "next/head";
import Content from "../../../components/Layout/Content";
import {useIsAuth} from "../../../shared/useIsAuth";
import {serverSideProps} from "../../../shared/serverSideAuth";
import ProductCreateSection from "../../../layouts/ProductCreateSection";
import ProductLayout from "../../../containers/store/product/ProductLayout";

export default function Product(props: any) {
  useIsAuth(true, props.meState);

  return (
    <>
      <Head>
        <title>Store Home Page</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Content>
        <ProductLayout>
          <ProductCreateSection />
        </ProductLayout>
      </Content>
    </>
  )
}

export const getServerSideProps = serverSideProps;
