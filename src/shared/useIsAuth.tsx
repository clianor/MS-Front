import {useSelector} from "react-redux";
import {State} from "../store";
import {useRouter} from "next/router";
import {useEffect} from "react";

export const useIsAuth = () => {
  const router = useRouter();
  const {me} = useSelector((state: State) => state.auth);

  useEffect(() => {
    if (!me.isLoading && !!me) {
      router.replace("/auth/login?next=" + router.pathname);
    }
  }, [me.isLoading]);
};