import { createSlice } from '@reduxjs/toolkit';

import {  fetchVendors } from '../services/vendorService';

const initialState = {
  vendors: [],
  loading: false,
  success: false,
  error: null,
  vendor: null,
};

const vendorSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    // Add reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendors.fulfilled, (state, action) => {        
        state.loading = false;
        state.vendors = action.payload;
        state.success = true;
      })
      .addCase(fetchVendors.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message;
      })
  },
});

export default vendorSlice.reducer;
