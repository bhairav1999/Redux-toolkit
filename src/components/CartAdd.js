import React from "react";
import { useSelector } from "react-redux";
import { CartSvgIcons } from "../common/allSvgIcons";
import "./Styles.css";
import CartList from "./CartList";

const CartAdd = () => {
  const cart = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div className="logo">Bk</div>
        <div className="cart-icon">
          <div className="cart-counter">{cart.amount}</div>
          <CartSvgIcons />
        </div>
      </nav>
      <CartList />
    </>
  );
};

export default CartAdd;
