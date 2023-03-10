import { configureStore } from "@reduxjs/toolkit";
import categoryListSlicer from "../../components/category/categoryListSlicer";
import changeCategorySlicer from "../../components/category/changeCategorySlicer";
import  ProductListSlicer  from "../../components/product/productListSlicer";
import CartListSlicer from "../../components/cart/CartListSlicer";
export const store = configureStore({
    reducer : {
        categories : categoryListSlicer,
        currentCategory : changeCategorySlicer,
        products : ProductListSlicer,
        carts : CartListSlicer
    }
})