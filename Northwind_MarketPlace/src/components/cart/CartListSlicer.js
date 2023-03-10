import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts : []
}

export const cartListSlicer = createSlice({
    name : "cartList",
    initialState,
    reducers : {
        addToCart : (state, action)=>{
            let addedItem = state.carts.find((cart)=>{
                return(cart.product.id === action.payload.product.id)
            })
            if(addedItem){
                let newState = state.carts.map((cartItem)=>{
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({}, addedItem, {quantity : addedItem.quantity + 1})
                    }
                    return cartItem
                })
                state.carts = newState
            }else{
            state.carts = [...state.carts, {...action.payload}]

            }
        },
        removeFromCart : (state, action)=>{
            let newState2 = state.carts.filter((cart)=>{
                return(cart.product.id !== action.payload)
            })
            state.carts = newState2
        }
    }
})

export const {addToCart, removeFromCart} = cartListSlicer.actions
export default cartListSlicer.reducer