import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await API.get('/products');
    return response.data;
  }
);

export const addProductToServer = createAsyncThunk(
  'products/addProductToServer',
  async (formData) => {
    const response = await API.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
);

export const deleteProductFromServer = createAsyncThunk(
  'products/deleteProductFromServer',
  async (id) => {
    await API.delete(`/products/${id}`);
    return id;
  }
);

export const updateProductOnServer = createAsyncThunk(
  'products/updateProductOnServer',
  async (product) => {
    const response = await API.put(`/products/${product.id}`, product);
    return response.data;
  }
);
