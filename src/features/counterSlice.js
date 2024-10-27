import { createSlice } from '@reduxjs/toolkit'
import  toast, { Toaster } from 'react-hot-toast';
const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,actions) => {
     state.value.push(actions.payload);
     toast.success("Added to cart")
      
    },
    removeToCart: (state,actions) => {
      state.value= state.value.filter((item)=> item.id!==actions.payload)
      toast.error("Removed from cart")
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {addToCart,removeToCart} = counterSlice.actions

export default counterSlice.reducer