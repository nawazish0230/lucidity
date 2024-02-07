import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatValueFromProductData } from "utils";

const API_URL = 'https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory'

export const fetchHomeData = createAsyncThunk('data/fetchHomeData', async () => {
  try {
    const response = await fetch(API_URL);
    const responseData = await response.json();

    const updatedData = formatValueFromProductData(responseData)
    return updatedData;
  } catch (error) {
    console.log("api error: " + error)
  }
});
