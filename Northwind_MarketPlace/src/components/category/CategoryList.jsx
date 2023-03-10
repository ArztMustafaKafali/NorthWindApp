import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { getProduct } from "../product/productListSlicer";
import { getCategories } from "./categoryListSlicer";
import { changeCategory } from "./changeCategorySlicer";
import "./CategoryList.css"

const CategoryList = () => {
  const categories = useSelector((state) => state.categories.categories);
  const currentCategory = useSelector(
    (state) => state.currentCategory.currentCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const onSelected = (category) => {
    dispatch(changeCategory(category));
    dispatch(getProduct(category.id))
  };
  return (
    <div>
      <h3>
        <Badge color="success">CategoryList</Badge>
      </h3>
      <ListGroup>
        {categories.map((category) => {
          return (
            <ListGroupItem
              active={currentCategory.id === category.id}
              onClick={() => onSelected(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
