import Head from "next/head";
import Header from "./Header";
import Button from "../Button";
import {useRouter} from "next/router";

type MainLayoutProps = {
  children?: React.ReactNode;
}

function LoginButton() {
  const router = useRouter();

  const handlerClick = () => {
    router.push("/auth/login");
  }

  return (
    <Button key="loginBtn" theme="secondary" onClick={handlerClick}>
      로그인
    </Button>
  )
}

function RegisterButton() {
  const router = useRouter();

  const handlerClick = () => {
    router.push("/auth/register");
  }

  return (
    <Button key="loginBtn" theme="secondary" onClick={handlerClick}>
      회원가입
    </Button>
  )
}

function MainLayout({children}: MainLayoutProps) {
  return (
    <div className="container">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>
      <Header title="마스" extra={[<LoginButton />, <RegisterButton />]}/>
      {children}
    </div>
  )
}

export default MainLayout;