import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {MeState, meSetAction} from "../reducer/auth/me";

// isAuth  null: 모두 허용, true: 로그인 유저만 허용, false: 로그인 유저는 접속 불가
export const useIsAuth = (isAuth: boolean | null = null, meState: MeState) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isMe = meState.id ? true : false;

  useEffect(() => {
    if (isAuth === true && isMe === false) {
      // 로그인하지 않은 상태라면 로그인으로 보냄
      router.replace("/auth/login?next=" + router.pathname);
    } else if (isAuth === false && isMe === true) {
      // 로그인 유저는 접속 불가
      router.push("/");
    }
    dispatch(meSetAction(meState))
  }, []);
};