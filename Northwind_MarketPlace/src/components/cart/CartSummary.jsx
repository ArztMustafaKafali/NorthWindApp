import React from "react";
import { Link } from "react-router-dom";
import "./CartSummary.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import alertifyjs from "alertifyjs";
import { removeFromCart } from "./CartListSlicer";
import { useDispatch, useSelector } from "react-redux";

const CartSummary = () => {
  const carts = useSelector((state) => state.carts.carts);

  const dispatch = useDispatch();

  const removerFromCarts = (product) => {
    dispatch(removeFromCart(product.id));
    alertifyjs.error(product.productName + " sepetten silindi");
  };
  const renderSummary = () => {
    return (
      <div>
        <UncontrolledDropdown>
          <DropdownToggle nav caret>
            Sepet
          </DropdownToggle>
          <DropdownMenu right>
            {carts.map((cart) => {
              return (
                <DropdownItem key={cart.product.productName}>
                  <Badge color="success"> {cart.quantity} </Badge>
                  {cart.product.productName}
                  <Badge
                    onClick={() => removerFromCarts(cart.product)}
                    color="danger"
                  >
                    {" "}
                    X{" "}
                  </Badge>
                </DropdownItem>
              );
            })}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="cartDetail"> Sepete Git</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  };
  const renderEmpty = () => {
    return <div>Sepet Boş</div>;
  };
  return <div>{carts.length > 0 ? renderSummary() : renderEmpty()}</div>;
};

export default CartSummary;
