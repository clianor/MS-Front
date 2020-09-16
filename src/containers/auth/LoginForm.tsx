import AuthLayout from "../../layouts/AuthLayout";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../store";
import {ChangeEvent, FormEvent, useCallback, useEffect} from "react";
import {changeFieldAction} from "../../reducer/auth";
import {loginAction, loginInitAction} from "../../reducer/auth/login";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {login} = useSelector((state: State) => state.auth);

  useEffect(() => {
    dispatch(loginInitAction());
  }, []);

  useEffect(() => {
    if (login.success)
      router.push("/");

    return () => {
      if (login.success)
        dispatch(loginInitAction());
    }
  }, [login.success]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(loginAction(login));
    },
    [login],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeFieldAction({
        formType: "login",
        key: e.target.name,
        value: e.target.value,
      }),
    );
  }, []);

  return (
    <AuthLayout
      type="login"
      form={login}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default LoginForm;
