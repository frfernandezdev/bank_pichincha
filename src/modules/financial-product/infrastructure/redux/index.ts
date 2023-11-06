import {createSlice} from '@reduxjs/toolkit';
import {initialFinancialProductState} from '../../domain/FinancialProductState';
import {
  fetchAllFinancialProducts,
  fetchDeleteFinancialProducts,
  fetchOneFinancialProducts,
  fetchPatchFinancialProducts,
  fetchPostFinancialProducts,
  fetchPutFinancialProducts,
} from './reducers';

const financialProductSlice = createSlice({
  name: 'financial-products',
  initialState: initialFinancialProductState,
  reducers: {},
  extraReducers: builder => {
    // fetchAllFinancialProducts
    builder.addCase(fetchAllFinancialProducts.fulfilled, (state, action) => {
      const {payload} = action;

      state.entities = payload;
    });
    builder.addCase(fetchAllFinancialProducts.pending, (_, __) => {
      console.log('pending');
    });
    builder.addCase(fetchAllFinancialProducts.rejected, (_, action) => {
      console.log('rejected', action.error);
    });
    // fetchOneFinancialProducts
    builder.addCase(fetchOneFinancialProducts.fulfilled, (state, action) => {
      const {payload} = action;

      state.entity = payload;
    });
    builder.addCase(fetchOneFinancialProducts.pending, (_, __) => {
      console.log('pending');
    });
    builder.addCase(fetchOneFinancialProducts.rejected, (_, action) => {
      console.log('rejected', action.error);
    });
    // fetchPostFinancialProducts
    builder.addCase(fetchPostFinancialProducts.fulfilled, (_, action) => {
      const {payload} = action;
      console.log(payload);
    });
    builder.addCase(fetchPostFinancialProducts.pending, (_, __) => {
      console.log('pending');
    });
    builder.addCase(fetchPostFinancialProducts.rejected, (_, action) => {
      console.log('rejected', action.error);
    });
    // fetchPutFinancialProducts
    builder.addCase(fetchPutFinancialProducts.fulfilled, (_, action) => {
      const {payload} = action;
      console.log(payload);
    });
    builder.addCase(fetchPutFinancialProducts.pending, (_, __) => {
      console.log('pending');
    });
    builder.addCase(fetchPutFinancialProducts.rejected, (_, action) => {
      console.log('rejected', action.error);
    });
    // fetchPatchFinancialProducts
    builder.addCase(fetchPatchFinancialProducts.fulfilled, (_, action) => {
      const {payload} = action;
      console.log(payload);
    });
    builder.addCase(fetchPatchFinancialProducts.pending, (_, __) => {
      console.log('pending');
    });
    builder.addCase(fetchPatchFinancialProducts.rejected, (_, action) => {
      console.log('rejected', action.error);
    });
    // fetchDeleteFinancialProducts
    builder.addCase(fetchDeleteFinancialProducts.fulfilled, (_, action) => {
      const {payload} = action;
      console.log(payload);
    });
    builder.addCase(fetchDeleteFinancialProducts.pending, (_, __) => {
      console.log('pending');
    });
    builder.addCase(fetchDeleteFinancialProducts.rejected, (_, action) => {
      console.log('rejected', action.error);
    });
  },
});

export const {} = financialProductSlice.actions;

export default financialProductSlice.reducer;
