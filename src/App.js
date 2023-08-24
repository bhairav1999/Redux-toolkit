import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CartAdd from "./components/CartAdd";
import { useEffect } from "react";
import { calculatedata } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatedata());
  }, [cartItems]);
  return (
    <>
      {isOpen && <Modal />}

      <CartAdd />
    </>
  );
}

export default App;
