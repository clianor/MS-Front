/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import {Formik} from 'formik';
import Content from "../../components/Layout/Content";
import Index from "../../components/Input";
import Button from "../../components/Button";

export default function Register() {
  return (
    <Content css={css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <div css={AuthLayoutStyle}>
        <h4>회원가입</h4>
        <Formik
          initialValues={{email: "", password: "", passwordConfirm: "", companyName: ""}}
          onSubmit={(values, {setErrors}) => {
            console.log("hello");
          }}
        >
          {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
            <form onSubmit={handleSubmit} css={FormStyle}>
              <div>
                <Index
                  type="email"
                  id="email"
                  name="email"
                  labelText="이메일"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="이메일"
                  required
                />
              </div>
              <div>
                <Index
                  type="password"
                  id="password"
                  name="password"
                  labelText="패스워드"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="패스워드"
                  required
                />
              </div>
              <div>
                <Index
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  labelText="패스워드확인"
                  onChange={handleChange}
                  value={values.passwordConfirm}
                  placeholder="패스워드확인"
                  required
                />
              </div>
              <div>
                <Index
                  type="password"
                  id="companyName"
                  name="companyName"
                  labelText="회사명"
                  onChange={handleChange}
                  value={values.companyName}
                  placeholder="회사명"
                  required
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>submit</Button>
            </form>
          )}
        </Formik>
      </div>
    </Content>
  )
}

const AuthLayoutStyle = css`
  display: block;
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
    min-width: 50vw;
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