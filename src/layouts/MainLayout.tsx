import Head from "next/head";
import Header from "../components/Layout/Header";
import Button from "../components/Button";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {meAction} from "../reducer/auth/me";

type MainLayoutProps = {
  children?: React.ReactNode;
}

function MainLayout({children}: MainLayoutProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meAction())
  }, []);
  
  return (
    <div className="container">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>
      <Header title="마스" extra={[<LoginButton key="loginBtn" />, <RegisterButton key="registerBtn" />]}/>
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

export default MainLayout;