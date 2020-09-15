import {AppProps} from "next/app";
import {wrapper} from "../store";
import "./reset.css";
import "./shared.css";
import MainLayout from "../components/Layout/MainLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default wrapper.withRedux(App);