import { createAsyncThunk } from "@reduxjs/toolkit";
// import responseData from './data.json'
import { formatValueFromProductData } from "utils";

export const fetchHomeData = createAsyncThunk('data/fetchHomeData', async () => {
  try {
    const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
    const responseData = await response.json();
    // console.log({ responseData, apiData })

    const updatedData = formatValueFromProductData(responseData)
    return updatedData;
  } catch (error) {
    console.log("api error: " + error)
  }
});