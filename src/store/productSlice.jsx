import { createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({    //read only
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
})


const productSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
    status: STATUSES.IDLE,

  },
  reducers: {   //reducers are function,with the help of this we do state muted , //pure function
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state,action){
      state.status=action.payload    //change status in initialStatus
    }

  }
})

export const { setProducts,setStatus } = productSlice.actions;
export default productSlice.reducer;

//THUNKS
//bydefault reducers works on synchronus in nature but api call is asynchronus in nature so to create async call use this thunk
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING))
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE))
    } catch (error) {
      console.log(error)
      dispatch(setStatus(STATUSES.ERROR))
    }

  }
}