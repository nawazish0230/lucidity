import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './account/slice'
import homeReducer from './home/slice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    home: homeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
