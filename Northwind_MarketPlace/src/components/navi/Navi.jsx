import React from "react";
import { Link } from "react-router-dom";

import CartSummary from "../cart/CartSummary";
import "./Navi.css";

function Navi(args) {
  return (
    <div>
      <div id="navi">
        <div id="naviItem">NorthWind Mağazası</div>
        <div id="naviItems">
          <div id="naviNewProduct"> <Link to="/productCreate"> Yeni Ürün Ekle </Link></div>
          <div id="naviItemLink"> <Link to="/"> Ana Sayfa</Link></div>
          <div id="naviItemSepet">
            <CartSummary></CartSummary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navi;
