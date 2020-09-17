export type MeState = {
  id: string;
  email: string;
  companyName: string;
  isLoading: boolean;
}

export const ME_REQUEST = "auth/ME_REQUEST";
export const ME_SUCCESS = "auth/ME_SUCCESS";
export const ME_FAILURE = "auth/ME_FAILURE";

export const meAction = () => {
  return {
    type: ME_REQUEST,
  }
}

export const meSuccessAction = (data: any) => {
  return {
    type: ME_SUCCESS,
    data,
  }
};
