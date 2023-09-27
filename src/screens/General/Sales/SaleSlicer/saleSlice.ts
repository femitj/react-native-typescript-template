import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {saleStateType} from '../../../../models/sale.model';

const initialState: saleStateType = {
  cartList: [],
};

export const SalesSlicer = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setCartList: (state, {payload}: PayloadAction<any>) => {
      state.cartList = [...state.cartList, payload];
    },
    setRemoveCartItem: (state, {payload}: PayloadAction<any>) => {
      const newList = [...state.cartList].filter(
        (value, index) => index !== payload.orderIndex,
      );
      state.cartList = newList;
    },
    clearSalesState: () => initialState,
  },
});

export const {clearSalesState, setCartList, setRemoveCartItem} =
  SalesSlicer.actions;

export default SalesSlicer.reducer;
