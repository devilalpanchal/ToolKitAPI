import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  isLoggedIN: false,
  name: null,
  loading: false,
  error: null,
  todoData:null,
  singleData:null
}

export const getTodo = createAsyncThunk('get/getTodo', async (_, thunkApi) => {
  try {
    const todo = await axios.get('https://dummyjson.com/products')
    // console.log(thunkApi)
    // console.log(todo.data)
    return todo.data.products
  } catch (err) {
    return thunkApi.rejectWithValue(err)
  }
})


export const getSingleProduct=createAsyncThunk('get/getSingleProduct',async(id,thunkApi)=>{

  try{
const singleData = await axios.get(`https://dummyjson.com/products/${id}`)
console.log(singleData.data)
return singleData.data
  }catch(err){
return thunkApi.rejectWithValue(err)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIN = !state.isLoggedIN
      // state.name = state.name.action
    },

  },
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state) => {
      state.loading = true
    })

    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.loading = false
      console.log(action)
      state.todoData = action.payload
    })
    builder
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(getSingleProduct.fulfilled, (state,action) => {
        state.loading = false
        console.log(action.payload)
        state.singleData=action.payload

      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.loading = false
        state.error=action.payload
      })
  },
})

export const { login } = authSlice.actions
export default authSlice.reducer
