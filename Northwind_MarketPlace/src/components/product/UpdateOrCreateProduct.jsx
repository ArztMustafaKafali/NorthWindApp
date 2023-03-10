import alertify from "alertifyjs";
import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Badge } from "reactstrap";
import ProductDetail from "./ProductDetail";
import { createProduct, updateProduct } from "./productListSlicer";

const UpdateProduct = () => {
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state)=>state.categories.categories)
  const dispatch = useDispatch();
  const { state } = useLocation();
  // useEffect(() => {
  //   dispatch(getCategories());
  // });

  const selectedProduct = products.filter((product) => {
    return product.id === state.productId;
  }) || null ;
  
  

  const [newProduct, setNewProduct] = useState({
    id: selectedProduct[0].id,
    categoryId: selectedProduct[0].categoryId,
    productName: selectedProduct[0].productName,
    quantityPerUnit: selectedProduct[0].quantityPerUnit,
    unitPrice: selectedProduct[0].unitPrice,
    unitsInStock: selectedProduct[0].unitsInStock,
  });


  const handleChange = (e) => {
    setNewProduct((previousProducts) => {
      const { name, value } = e.target;
      return {
        ...previousProducts,
        [name]: name === "categoryId" ? parseInt(value, 10) : value,
      };
    });

  };

  const updateProducts = (newProduct) => {
    dispatch(updateProduct(newProduct));
    console.log(newProduct)
    alertify.success(newProduct.productName + " güncellendi");
  };
  const createProducts = (product) => {
    dispatch(createProduct(product));
    alertify.success(product.productName + " eklendi");
  };


  return (
    <div>
      <h3>
        <Badge color="success"> Product Detail </Badge>
      </h3>
      <ProductDetail
      product={newProduct}
      categories = {categories}
      handleChange={handleChange}
      handleSave={updateProducts}
    ></ProductDetail>
    </div>
  );
};

export default UpdateProduct;
