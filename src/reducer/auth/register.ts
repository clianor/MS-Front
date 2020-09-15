export type RegisterState = {
  email: string;
  password: string;
  passwordConfirm: string;
  companyName: string;
  success: boolean;
  isLoading?: boolean;
}

export const REGISTER_INITIALIZE = "auth/REGISTER_INITIALIZE";
export const REGISTER_REQUEST = "auth/REGISTER_REQUEST";
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";

export const registerInitAction = () => {
  return {
    type: REGISTER_INITIALIZE,
  };
};

export const registerAction = (data: any) => {
  return {
    type: REGISTER_REQUEST,
    data,
  };
};

export const registerSuccessAction = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    data,
  };
};
