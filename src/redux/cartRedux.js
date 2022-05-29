import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({ 
    name: 'cart',
    initialState :{
        quantity: 0,
        total: 0,
    },
    reducers : {
        incrementProduct: (state,action)=>{
            state.quantity += 1;
            state.total += action.payload.Prices;
        },
        decrementProduct: (state,action)=>{
            state.quantity -= 1;
            state.total -= action.payload.Prices;
        }
    },
})

export const {incrementProduct,decrementProduct} = cartSlice.actions;
export default cartSlice.reducer;