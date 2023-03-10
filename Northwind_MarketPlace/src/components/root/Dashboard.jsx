import React from "react";
import { Col, Row } from "reactstrap";
import CategoryList from "../category/CategoryList";
import ProductList from "../product/ProductList";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col xs = "3">
          <CategoryList></CategoryList>
        </Col>
        <Col xs="9">
        <ProductList></ProductList>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
