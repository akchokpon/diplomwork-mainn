import { useContext, useState } from "react";
import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";
import { AppContext } from "../App";

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user } = useContext(AppContext);
  
  if (Object.keys(cart).length === 0) {
    return (
    <div className="Cart" >
      <h1>Cart</h1>
      <CartList />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
    )
  }
  if (!user) {
    <div className="Cart" >
      <h1>Cart</h1>
      <CartList />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  }

  return (
    <div className="Cart" >
      <h1>Cart</h1>
      <CartList />
      <button type="sumbit" className="order" onClick={() => setModalActive(true)}>Order</button>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  )
}