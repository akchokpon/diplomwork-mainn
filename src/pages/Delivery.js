import React, { useEffect, useRef } from "react";
import "./Delivery.css"
import delivery1 from "../assets/delivery1.png";

export default function Delivery() {
  const bottomRef = useRef(null); // ссылка на последний элемент на странице

  useEffect(() => {
    // автоматический скролл до нижнего уровня страницы
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="Delivery">
      {" "}
      <div ref={bottomRef} /> {/* ссылка на последний элемент */}
      <div className="Delivery-header">
        <h1>Delivery</h1>
        <p>Fast and reliable delivery services</p>
      </div>
      <div className="Delivery-photos">
        <img src={delivery1} alt="Delivery truck" />
      </div>
      
      <div className="payment">
          <div className="car">
            <img
              src="https://stormsend1.djicdn.com/stormsend/uploads/45344040-98af-0136-3de3-12528100fbe3/truck-moving.svg"
              alt="delivery-car"
            />
            <p>
              Free shipping on orders over <br />
              USD $149{" "}
            </p>
          </div>
          <div className="card">
            <img
              src="https://stormsend1.djicdn.com/stormsend/uploads/48b0bc00-98af-0136-ac46-1237445f15bc/credit-card.svg"
              alt="delivery-card"
            />
            <p>
              We accept credit cards, <br />
              PayPal, and bank wires
            </p>
          </div>
          <div className="reviews">
            <img
              src="https://stormsend1.djicdn.com/stormsend/uploads/4b8c3060-98af-0136-ac47-1237445f15bc/comment-alt-smile.svg"
              alt="delivery-reviews"
            />
            <p>Order Service: Live Chat</p>
          </div>
        </div>
    </div>
  );
  
}
