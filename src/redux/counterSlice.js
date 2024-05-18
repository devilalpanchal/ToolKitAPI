import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  loading: false,
  count: 0,
  error: null,
  user: null,
  toggle: false,
}

let counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      // console.log(action.payload.name)
      state.count = state.count + 1
    },
    decrement: (state) => {
      state.count = state.count - 1
    },
    toggleValue: (state, action) => {
      state.toggle = !state.toggle
    },
  },
})
console.log(counterSlice)

export const { increment, decrement, toggleValue } = counterSlice.actions

export default counterSlice.reducer
