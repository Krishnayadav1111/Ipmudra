import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';
import contactReducer from './slices/contactSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    contact: contactReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
