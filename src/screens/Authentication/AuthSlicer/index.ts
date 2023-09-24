import {Signin, signInResponse} from '../../../models/auth.model';
import {apiSlice} from '../../../services/api';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: userData => ({
        url: '/auth/register_company',
        method: 'POST',
        body: userData,
      }),
    }),
    signInUser: builder.mutation<signInResponse, Signin>({
      query: userData => ({
        url: '/auth/company_login',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['profile'],
    }),
    verifySignUp: builder.mutation({
      query: code => ({
        url: `/auth/user/verify/${code}`,
        method: 'PATCH',
      }),
    }),
    resendVerifySignUp: builder.mutation({
      query: userData => ({
        url: '/auth/resend/account/verify_code',
        method: 'POST',
        body: userData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: userData => ({
        url: '/auth/forgot_password',
        method: 'POST',
        body: userData,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({resetCode, ...rest}) => ({
        url: `/auth/reset_password/${resetCode}`,
        method: 'PATCH',
        body: rest,
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useVerifySignUpMutation,
  useResendVerifySignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
