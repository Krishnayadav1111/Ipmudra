import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────────────────────────────────────
// EmailJS configuration
// 1. Go to https://www.emailjs.com/ and sign up for a free account.
// 2. Create an Email Service connected to info@ipmudra.com (Hostinger SMTP).
// 3. Create an Email Template and note its Template ID.
// 4. Copy your Public Key from Account → API Keys.
// 5. Replace the three placeholder values below.
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_9l6knyf';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_fayl6uc';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'HDBRU9joBSlUf4Hoj';   // e.g. 'abcDEFghiJKL'

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
