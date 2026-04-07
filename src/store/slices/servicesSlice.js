import { createSlice } from '@reduxjs/toolkit';
import { SERVICES } from '../../utils/constants';

const initialState = {
  list: SERVICES,
  loading: false,
  selected: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    clearSelected: (state) => {
      state.selected = null;
    },
  },
});

export const { setSelected, clearSelected } = servicesSlice.actions;
export default servicesSlice.reducer;
