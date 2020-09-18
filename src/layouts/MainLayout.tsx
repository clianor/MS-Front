import Head from "next/head";
import Header from "../components/Layout/Header";
import Button from "../components/Button";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {State} from "../store";

type MainLayoutProps = {
  children?: React.ReactNode;
}

function MainLayout({children}: MainLayoutProps) {
  const {me} = useSelector((state: State) => state.auth);

  useEffect(() => {}, [me.id])

  return (
    <div className="container">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>
      <Header
        title="마스"
        extra={
          me.id
            ? [<LogoutButton key="logoutBtn" />]
            : [<LoginButton key="loginBtn" />, <RegisterButton key="registerBtn" />]
        }
      />
      {children}
    </div>
  )
}

function LoginButton() {
  const router = useRouter();

  const handlerClick = () => {
    router.push("/auth/login");
  }

  return (
    <Button theme="secondary" onClick={handlerClick}>
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
    <Button theme="secondary" onClick={handlerClick}>
      회원가입
    </Button>
  )
}

function LogoutButton() {
  const router = useRouter();

  const handlerClick = () => {
    router.push("/auth/logout");
  }

  return (
    <Button theme="secondary" onClick={handlerClick}>
      로그아웃
    </Button>
  )
}

export default MainLayout;