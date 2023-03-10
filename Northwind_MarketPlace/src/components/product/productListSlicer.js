import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

export const getProduct = createAsyncThunk("getProduct", async(categoryId)=>{
    let url = "http://localhost:3000/products"
    if(categoryId){
        url += "?categoryId=" + categoryId
    }
    const response = await fetch(url)
    const result = await response.json()
    return result
})
export const updateProduct = createAsyncThunk("updateProduct", async(product)=>{
    let url = "http://localhost:3000/products/"+(product.id || "")
    const response = fetch(url, {
        method : "PUT",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(product)
    })
    return response.json()
})
export const createProduct = createAsyncThunk("updateProduct", async(product)=>{
    let url = "http://localhost:3000/products"
    const response = fetch(url, {
        method : "POST",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(product)
    })
    return response.json()
})


export const ProductListSlicer = createSlice({
    name : "productList",
    initialState,
    reducers : {
        
    },
    extraReducers : (build)=>{
        build.addCase(getProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
        build.addCase(updateProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
        build.addCase(createProduct, (state, action)=>{
            state.products = action.payload
        })
    }
})

export default ProductListSlicer.reducer