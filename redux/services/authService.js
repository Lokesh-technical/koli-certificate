import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApiInstance from '../../utils/interceptor';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosApiInstance.post(
        'auth/login',
        { email, password },
        { requiresToken: false }
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
