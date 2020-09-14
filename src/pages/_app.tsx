import {AppProps} from "next/app";
import Head from "next/head";
import {wrapper} from "../store";
import "./reset.css";
import "./shared.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);