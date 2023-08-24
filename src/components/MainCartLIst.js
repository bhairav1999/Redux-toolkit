import React from "react";
import "./Styles.css";
import { ArrowDownSvgIcon, ArrowUpSvgIcon } from "../common/allSvgIcons";
import { useDispatch } from "react-redux";
import { Decrese, RemoveItem, increse } from "../features/cart/cartSlice";

const MainCartLIst = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="section">
        <div className="leftSide">
          <div className="product_img">
            <img src={img} alt="" />
          </div>
          <div className="name_section">
            <h3>{title}</h3>
            <h5>$ {price}</h5>
            <button onClick={() => dispatch(RemoveItem(id))}>remove</button>
          </div>
        </div>
        <div className="rightSide">
          <button onClick={() => dispatch(increse({ id }))}>
            <ArrowUpSvgIcon />
          </button>
          <p>{amount <= +9 ? `0${amount}` : amount}</p>
          <button
            onClick={() => {
              if (amount === 1) {
                dispatch(RemoveItem(id));
                return;
              }
              dispatch(Decrese({ id }));
            }}
          >
            <ArrowDownSvgIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainCartLIst;
