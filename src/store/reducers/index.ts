import {combineReducers} from '@reduxjs/toolkit';
import RouterReducer from '../../navigations/routerSlicer';
import AuthReducer from '../../screens/Authentication/AuthSlicer/authSlice';
import GeneralReducer from '../../screens/General/GeneralSlicer/generalSlice';
import SalesReducer from '../../screens/General/Sales/SaleSlicer/saleSlice';
import {apiSlice} from '../../services/api';

const rootReducer = combineReducers({
  router: RouterReducer,
  authentication: AuthReducer,
  general: GeneralReducer,
  sales: SalesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
