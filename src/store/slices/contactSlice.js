import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const submitContact = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      // Map form fields to your EmailJS template variables.
      // These names must match the {{variables}} in your EmailJS template.
      const templateParams = {
        from_name:  `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone:      formData.phone || 'Not provided',
      service:    formData.subject,
        message:    formData.message,
        to_email:   'info@ipmudra.com',   // recipient shown in the template
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      return { message: 'Thank you! Your message has been sent. We will get back to you within 24 hours.' };
    } catch (err) {
      return rejectWithValue({
        message: `Submission failed: ${err?.text || err?.message || 'Please try again or email us directly at info@ipmudra.com'}`,
      });
    }
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
      state.status  = 'idle';
      state.message = '';
      state.error   = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'loading';
        state.error  = '';
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.status  = 'success';
        state.message = action.payload.message;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error';
        state.error  = action.payload?.message || 'Something went wrong. Please try again.';
      });
  },
});

export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;
