import React from "react";
import "./Styles.css";
import { useDispatch } from "react-redux";
import { cleaCart } from "../features/cart/cartSlice";
import { closeModel } from "../features/model/model";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="main_overlay">
        <div className="wrapper">
          <div className="main_section">
            <h5 className="product_list_name1">
              Remove all Items from your shopping cart ?
            </h5>
            <div className="modal_btn">
              <button
                className="button1"
                onClick={() => {
                  dispatch(cleaCart());
                  dispatch(closeModel());
                }}
              >
                Confirm
              </button>
              <button className="button" onClick={() => dispatch(closeModel())}>
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
