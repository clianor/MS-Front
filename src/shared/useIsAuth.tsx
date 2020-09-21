import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {State} from "../store";
import {meAction, meSetAction, MeState} from "../reducer/auth/me";

// isAuth  null: 모두 허용, true: 로그인 유저만 허용, false: 로그인 유저는 접속 불가
export const useIsAuth = (isAuth: boolean | null = null, state?: MeState) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {me} = useSelector((state: State) => state.auth);

  useEffect(() => {
    if (state) {
      dispatch(meSetAction(state))
    } else {
      dispatch(meAction());
    }
  }, []);

  useEffect(() => {
    if (isAuth === true && !me.id) {
      // 로그인하지 않은 상태라면 로그인으로 보냄
      router.replace("/auth/login?next=" + router.pathname);
    } else if (isAuth === false && !!me.id) {
      // 로그인 유저는 접속 불가
      router.push("/");
    }
  }, [me.id]);
};