import { baseapi } from './api';
import {
  IUser,
  loginBody,
  loginRes,
  signupBody,
} from 'libs/shared/src/lib/types/types';

export const authApiSlice = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (sbody: signupBody) => ({
        method: 'POST',
        url: 'api/user/createuser',
        body: sbody,
      }),
    }),
    login: builder.mutation<IUser, loginBody>({
      query: (LoginBody: loginBody) => ({
        method: 'POST',
        url: 'api/user/login',
        body: LoginBody,
      }),
    }),
    
  }),
});

export const { useSignupMutation, useLoginMutation } = authApiSlice;
