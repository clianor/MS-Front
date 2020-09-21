export type MeState = {
  id: string;
  email: string;
  companyName: string;
  isLoading: boolean;
}

export const ME_SET = "auth/ME_SET";
export const ME_REQUEST = "auth/ME_REQUEST";
export const ME_SUCCESS = "auth/ME_SUCCESS";
export const ME_FAILURE = "auth/ME_FAILURE";

export const meSetAction = (data?: any) => {
  return {
    type: ME_SET,
    data,
  };
}

export const meAction = (data?: any) => {
  return {
    type: ME_REQUEST,
    data,
  };
};

export const meSuccessAction = (data: any) => {
  return {
    type: ME_SUCCESS,
    data,
  };
};
