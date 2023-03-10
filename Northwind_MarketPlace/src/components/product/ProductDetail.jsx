import React from "react";
import { Button } from "reactstrap";
import SelectInput from "../toolBox/SelectInput";
import TextInput from "../toolBox/TextInput";

const ProductDetail = ({
  product,
  categories,
  handleChange,
  handleSave,
  errors,
}) => {
  return (
    <div className="form-group">
      <form>
        <TextInput
          name="productName"
          label="Product Name"
          value={product.productName}
          onChange={handleChange}
          error={errors}
        ></TextInput>
          <hr></hr>
        <SelectInput
          name="categoryId"
          value={product.categoryId}
          label="Category Name"
          onChange={handleChange}
          options={categories.map((category) => {
            return {
              value: category.id,
              text: category.categoryName,
            };
          })}
          defaultOption="seçiniz"
          error = {{errors}}
        ></SelectInput>
        <hr></hr>
        <TextInput
          name="quantityPerUnit"
          label="Quantity Per Unit"
          value={product.quantityPerUnit}
          onChange={handleChange}
          error={errors}
        ></TextInput>
        <TextInput
          name="unitPrice"
          label="Unit Price"
          value={product.unitPrice}
          onChange={handleChange}
          error={errors}
        ></TextInput>
        <TextInput
          name="unitsInStock"
          label="Units In Stock"
          value={product.unitsInStock}
          onChange={handleChange}
          error={errors}
        ></TextInput>
      </form>
      <Button onClick={() => handleSave(product)} color="success">
        Product Ekle
      </Button>
    </div>
  );
};

export default ProductDetail;
