import alertify from "alertifyjs";
import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Badge } from "reactstrap";
import ProductCreateInput from "./ProductCreateInput";
import { createProduct } from "./productListSlicer";

const ProductCreate = () => {
    const categories = useSelector((state)=>state.categories.categories)
    const dispatch = useDispatch();

  
    
    
  
    const [newProduct, setNewProduct] = useState({
      categoryId:"",
      productName:"",
      quantityPerUnit:"",
      unitPrice:"",
      unitsInStock:""
    });
    console.log(newProduct)
  
  
    const handleChange = (e) => {
      setNewProduct((previousProducts) => {
        const { name, value } = e.target;
        return {
          ...previousProducts,
          [name]: name === "categoryId" ? parseInt(value, 10) : value,
        };
      });
  
    };
  
    const createProducts = (newProduct) => {
      dispatch(createProduct(newProduct));
      alertify.success(newProduct.productName + " eklendi");
    };
  return (
    <div>
      <h3><Badge color='success'>Product Create</Badge></h3>
      <ProductCreateInput
      product={newProduct}
      categories = {categories}
      handleChange={handleChange}
      handleSave={createProducts}
    ></ProductCreateInput>    </div>
  )
}

export default ProductCreate
