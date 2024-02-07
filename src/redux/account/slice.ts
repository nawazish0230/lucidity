import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isAdmin: boolean
}

const initialState: CounterState = {
  isAdmin: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    toggleAccount: (state) => {
      state.isAdmin = !state.isAdmin
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { toggleAccount } = accountSlice.actions

export default accountSlice.reducer
