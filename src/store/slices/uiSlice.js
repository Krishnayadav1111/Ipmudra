import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    mobileDrawerOpen: false,
    enquireModalOpen: false,
  },
  reducers: {
    toggleMobileDrawer: (state) => {
      state.mobileDrawerOpen = !state.mobileDrawerOpen;
    },
    setMobileDrawer: (state, action) => {
      state.mobileDrawerOpen = action.payload;
    },
    toggleEnquireModal: (state) => {
      state.enquireModalOpen = !state.enquireModalOpen;
    },
    setEnquireModal: (state, action) => {
      state.enquireModalOpen = action.payload;
    },
  },
});

export const { toggleMobileDrawer, setMobileDrawer, toggleEnquireModal, setEnquireModal } = uiSlice.actions;
export default uiSlice.reducer;
