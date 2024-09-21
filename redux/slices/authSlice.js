import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { login } from '../services/authService';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.success = false;
      state.error = null;
      storage.removeItem('persist:root');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
