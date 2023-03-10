import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : []
}

export const getCategories = createAsyncThunk("getCategories", async()=>{
    const response  = await fetch("http://localhost:3000/categories")
    const result = await response.json()
    return result
})

export const categoryListSlicer = createSlice({
    name : "category",
    initialState,
    reducers : {
        
    },
    extraReducers : (build)=>{
        build.addCase(getCategories.fulfilled, (state, action)=>{
            state.categories = action.payload
        })
    }
    
})

export default categoryListSlicer.reducer