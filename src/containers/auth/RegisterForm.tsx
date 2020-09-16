import {ChangeEvent, FormEvent, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AuthLayout from "../../layouts/AuthLayout";
import {registerAction, registerInitAction} from "../../reducer/auth/register";
import {changeFieldAction} from "../../reducer/auth";
import {State} from "../../store";
import {useRouter} from "next/router";

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {register} = useSelector((state: State) => state.auth);

  useEffect(() => {
    dispatch(registerInitAction());
  }, []);

  useEffect(() => {
    if (register.success)
      router.push("/");

    return () => {
      dispatch(registerInitAction());
    }
  }, [register.success]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(registerAction(register));
    },
    [register],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeFieldAction({
        formType: "register",
        key: e.target.name,
        value: e.target.value,
      }),
    );
  }, []);

  return (
    <AuthLayout
      type="register"
      form={register}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default RegisterForm;
