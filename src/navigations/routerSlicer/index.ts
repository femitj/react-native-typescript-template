import {createSlice} from '@reduxjs/toolkit';

interface Props {
  showLogoutModal?: boolean;
  loader?: boolean;
}

const initialState: Props = {
  showLogoutModal: false,
  loader: false,
};

export const RouterSlicer = createSlice({
  name: 'router',
  initialState,
  reducers: {
    showLogoutModal: state => {
      state.showLogoutModal = true;
    },
    hideLogoutModal: state => {
      state.showLogoutModal = false;
    },
    showLoader: state => {
      state.loader = true;
    },
    hideLoader: state => {
      state.loader = false;
    },
  },
});

export const {showLogoutModal, hideLogoutModal, showLoader, hideLoader} =
  RouterSlicer.actions;

export default RouterSlicer.reducer;
