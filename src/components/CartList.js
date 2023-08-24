import React from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import MainCartLIst from "./MainCartLIst";
import { cleaCart } from "../features/cart/cartSlice";
import { openModel } from "../features/model/model";

const CartList = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="product_list_name">Product List</h1>
      {amount === 0 ? (
        <h5 className="product_list_name">is Currently Empty</h5>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <MainCartLIst key={index} {...item} />
          ))}
          <hr />
          <div className="section1">
            <h3>Total</h3>
            <h3>$ {total}</h3>
          </div>
          <div className="clear_cart">
            <button onClick={() => dispatch(openModel())}>Clear Cart</button>
          </div>
        </>
      )}
    </>
  );
};

export default CartList;
