import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
import env from '../config/env';

export enum APIStatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export interface APIError {
  code: number;
  data?: any;
  message?: any;
  status?: any;
}

export const {BACKEND_URL: customBaseUrl} = env;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${customBaseUrl}/api/v1`,
    prepareHeaders: async (headers, {getState}) => {
      const token = (getState() as RootState).authentication.token; // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    'Authentication',
    'profile',
    'user',
    'socket',
    'categories',
    'products',
    'sales',
  ],
  endpoints: () => ({}),
});
