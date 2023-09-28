import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import env from '../config/env';

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

// export const {BACKEND_URL: customBaseUrl} = env;
const customBaseUrl = 'https://gima-backend.onrender.com';
// const customBaseUrl = 'http://localhost:8080';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${customBaseUrl}/api/v1`,
    prepareHeaders: async (headers, {getState}) => {
      let token = (getState() as RootState).authentication.token; // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        const userToken = await AsyncStorage.getItem('token');
        if (userToken) {
          token = userToken;
          headers.set('authorization', `Bearer ${token}`);
        }
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
