import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {FinancialProduct} from '../../../domain/FinancialProductState';

//const URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/'
const URL = 'http://10.0.2.2:3000';

const instance = axios.create({
  baseURL: URL,
  headers: {
    authorId: 'e4c0787d-4c4c-4886-9c50-2c2fd64f2c22',
  },
});

export const fetchAllFinancialProducts = createAsyncThunk(
  'financial-products/fetchAll',
  async () => {
    const response = await instance.get('products');

    return response.data;
  },
);

export const fetchOneFinancialProducts = createAsyncThunk(
  'financial-products/fetchOne',
  async (id: string) => {
    const response = await instance.get(`products/${id}`);

    return response.data;
  },
);

export const fetchPostFinancialProducts = createAsyncThunk(
  'financial-products/fetchPost',
  async (financialProduct: FinancialProduct) => {
    const response = await instance.post('products', financialProduct);

    return response.data;
  },
);

export const fetchPutFinancialProducts = createAsyncThunk(
  'financial-products/fetchPut',
  async (financialProduct: FinancialProduct) => {
    const response = await instance.put(
      `products/${financialProduct.id}`,
      financialProduct,
    );

    return response.data;
  },
);

export const fetchPatchFinancialProducts = createAsyncThunk(
  'financial-products/fetchPatch',
  async (financialProduct: Partial<FinancialProduct>) => {
    const response = await instance.patch(
      `products/${financialProduct.id}`,
      financialProduct,
    );

    return response.data;
  },
);

export const fetchDeleteFinancialProducts = createAsyncThunk(
  'financial-products/fetchDelete',
  async (id: string) => {
    const response = await instance.delete(`products/${id}`);

    return response.data;
  },
);
