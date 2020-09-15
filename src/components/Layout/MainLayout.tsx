import Head from "next/head";
import Header from "./Header";
import Button from "../Button";
import {useRouter} from "next/router";

type MainLayoutProps = {
  children?: React.ReactNode;
}

function MainLayout({children}: MainLayoutProps) {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>
      <Header title="마스" extra={[<Button key="loginBtn" onClick={() => router.push("/auth/login")}>로그인</Button>]}/>
      {children}
    </div>
  )
}

export default MainLayout;