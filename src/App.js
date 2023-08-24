import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CartAdd from "./components/CartAdd";
import { useEffect } from "react";
import { calculatedata, GetCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatedata());
  }, [cartItems]);

  useEffect(() => {
    dispatch(GetCartItems("random"));
  }, []);
  console.log(`Bhairav`, isLoading);

  if (isLoading) {
    return <h1 className="product_list_name">Loading...</h1>;
  }
  return (
    <>
      {isOpen && <Modal />}

      <CartAdd />
    </>
  );
}

export default App;
