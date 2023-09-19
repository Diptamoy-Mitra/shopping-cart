import { createSlice } from '@reduxjs/toolkit'

const initialState=[]

const cartSlice= createSlice({
  name: 'cart',
  initialState,
  reducers:{   //reducers are function,with the help of this we do state muted , //pure function
    add(state,action){  

      state.push(action.payload);  //directly muted the state with the help of createSlice
    },
    remove(state,action){
      return state.filter((item) => item.id !== action.payload);
    }
  }
})

export  const {add, remove}=cartSlice.actions;
export default cartSlice.reducer;