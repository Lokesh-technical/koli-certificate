import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApiInstance from '../../utils/interceptor';

export const fetchVendors = createAsyncThunk(
    'api/fetchVendors ',
    async () => {
      try {
        const response = await axiosApiInstance.get('vendor');
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch vendors');
      }
    }
  );
