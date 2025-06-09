import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProductToServer,
  deleteProductFromServer,
  updateProductOnServer
} from '../thunks/productsThunks';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProductToServer.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteProductFromServer.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(updateProductOnServer.fulfilled, (state, action) => {
        const index = state.list.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  }
});

export default productsSlice.reducer;
