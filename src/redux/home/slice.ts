import { createSlice, current } from '@reduxjs/toolkit';
import { fetchHomeData } from './action';
import { ApiStatus } from 'constant';
import { formatValueFromProductData, replaceProductInArray } from 'utils';
import { IHomeState } from './types';

// Define the initial state
const initialState: IHomeState = {
  data: {
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStockProducts: 0,
    numberOfCategories: 0,
    data: [],
  },
  filteredData: {
    totalProducts: 0,
    totalStoreValue: 0,
    outOfStockProducts: 0,
    numberOfCategories: 0,
    data: [],
  },
  status: ApiStatus.Idle,
  error: "",
};

// Create the data slice
const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    disabledProduct: (state, action) => {
      const selectedProduct = action.payload.data;
      const currentProducts = current(state).filteredData.data;
      const updatedProducts = replaceProductInArray(currentProducts, selectedProduct)
      state.filteredData = formatValueFromProductData(updatedProducts, selectedProduct)
    },
    deleteProduct: (state, action) => {
      const selectedProduct = action.payload.data;
      const deletedProduct = current(state).filteredData.data?.filter(item => item.name !== selectedProduct.name)
      state.filteredData = formatValueFromProductData(deletedProduct);
    },
    editProduct: (state, action) => {
      const selectedProduct = action.payload.data;
      const updatedProducts = replaceProductInArray(current(state).filteredData.data, selectedProduct)
      state.filteredData = formatValueFromProductData(updatedProducts);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = ApiStatus.Loading;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = ApiStatus.Success;
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = ApiStatus.Failed;
        state.error = action.error.message;
      });
  },
});

export const { disabledProduct, deleteProduct, editProduct } = homeSlice.actions

export default homeSlice.reducer;

