import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitContact = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    // Mock API call – replace with real endpoint when backend is ready
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData.email) {
          resolve({ message: 'Thank you! We will get back to you within 24 hours.' });
        } else {
          reject(rejectWithValue({ message: 'Submission failed. Please try again.' }));
        }
      }, 1500);
    });
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    status: 'idle', // idle | loading | success | error
    message: '',
    error: '',
  },
  reducers: {
    resetContact: (state) => {
      state.status = 'idle';
      state.message = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.status = 'success';
        state.message = action.payload.message;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload?.message || 'Something went wrong.';
      });
  },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
