import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCategory : ""
}

export const changeCategorySlicer = createSlice({
    name : "currentCategory",
    initialState,
    reducers : {
        changeCategory : (state, action)=>{
            state.currentCategory = action.payload
        }
    }
})

export const {changeCategory} = changeCategorySlicer.actions
export default changeCategorySlicer.reducer