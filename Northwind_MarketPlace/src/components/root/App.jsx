import React from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail"
import UpdateProduct from "../product/UpdateOrCreateProduct"
import ProductCreate from "../product/ProductCreate";

const App = () => {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/cartDetail" element={<CartDetail></CartDetail>}></Route>
          <Route path="/productDetail/:productId" element={<UpdateProduct></UpdateProduct>}></Route>
          <Route path="/productCreate" element={<ProductCreate></ProductCreate>}></Route>
        </Routes>
      </Container>
    </div>
  );
};

export default App;
