import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generalStateType} from '../../../models/general.model';

const initialState: generalStateType = {
  categories: [],
  category: {
    title: '',
    description: '',
  },
  products: [],
  product: {},
};

export const GeneralSlicer = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<any>) => {
      state.categories = action.payload;
    },
    setProducts: (state, {payload}: PayloadAction<any>) => {
      state.products = payload;
    },
    clearGeneralState: () => initialState,
  },
});

export const {setProducts, setCategories, clearGeneralState} =
  GeneralSlicer.actions;

export default GeneralSlicer.reducer;
