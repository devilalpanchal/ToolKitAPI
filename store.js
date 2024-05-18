import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './src/redux/counterSlice'
import authSlice from './src/redux/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
})
