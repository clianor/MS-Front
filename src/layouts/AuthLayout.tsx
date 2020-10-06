/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import InputBox from "../components/Input";
import Button from "../components/Button";

interface AuthLayoutProps {
  type: "login" | "register";
  form: any;
  onChange(e: any): void;
  onSubmit(e: any): void;
}

const AuthLayout = ({ type, form, onChange, onSubmit }: AuthLayoutProps) => {
  const text = type === "login" ? "로그인" : "회원가입";

  return (
    <div css={AuthLayoutStyle}>
      <h4>{text}</h4>
      <form onSubmit={onSubmit} css={FormStyle}>
        <div>
          <InputBox
            type="email"
            id="email"
            name="email"
            labelText="이메일"
            onChange={onChange}
            value={form.email}
            placeholder="이메일"
            required
          />
        </div>
        <div>
          <InputBox
            type="password"
            id="password"
            name="password"
            labelText="패스워드"
            onChange={onChange}
            value={form.password}
            placeholder="패스워드"
            required
          />
        </div>
        {
          type === "register" && (
            <>
              <div>
                <InputBox
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  labelText="패스워드확인"
                  onChange={onChange}
                  value={form.passwordConfirm}
                  placeholder="패스워드확인"
                  required
                />
              </div>
              <div>
                <InputBox
                  type="text"
                  id="companyName"
                  name="companyName"
                  labelText="회사명"
                  onChange={onChange}
                  value={form.companyName}
                  placeholder="회사명"
                  required
                />
              </div>
            </>
          )
        }
        <Button type="submit" size="middle" isLoading={form.isLoading}>{text}</Button>
      </form>
    </div>
  );
}

const AuthLayoutStyle = css`
  display: block;
  max-width: 40rem;
  padding: 2.25rem;
  box-shadow: 0 1px 5px 1px #E6E9F4;
  & > h4 {
    font-size: 2.25rem;
    padding-bottom: 2rem;
    letter-spacing: 0.5rem;
    text-align: center;
    font-family: 'Black Han Sans', sans-serif;
  }
`;

const FormStyle = css`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: column;
    width: 50vw;
    max-width: 100%;
    padding-bottom: 0.75rem;
  }
  & > div > label {
    font-size: 1.1rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  @media screen and (max-width: 620px) {
    & > div {
      min-width: 70vw;
    }
  }
`;

export default AuthLayout;
