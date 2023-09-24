import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStateType} from '../../../models/auth.model';

const initialState: AuthStateType = {
  id: null,
  token: null,
  status: null,
  firstLogin: false,
};

export const AuthSlicer = createSlice({
  name: 'router',
  initialState,
  reducers: {
    logOutUser: () => initialState,
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setAuthData: (state, action: PayloadAction<any>) => {
      state = {...state, ...action.payload};
    },
    setFirstLogin: (state, action: PayloadAction<boolean>) => {
      state.firstLogin = action.payload;
    },
  },
});

export const {logOutUser, setToken, setAuthData, setFirstLogin} =
  AuthSlicer.actions;

export default AuthSlicer.reducer;
