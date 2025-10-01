import React, { useState } from "react";
import { CartBox } from "../style/CartContainerStyle";
import { IoClose } from "react-icons/io5";
import { TfiTrash } from "react-icons/tfi";
import { TiShoppingCart } from "react-icons/ti";

const CartContainer = ({
  cart,
  onClose,
  onIncrement,
  onDecrement,
  onDelete,
  onCheckout,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (id) => {
    onIncrement(id);
  };

  return (
    <CartBox className="animate__animated animate__bounceInRight">
      <div className="cart-header">
        <h2>
          <TiShoppingCart className="cart" /> Cart
        </h2>
        <IoClose className="close-btn" onClick={onClose} />
      </div>
      <div className="cart_holder">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart_content" key={item.id}>
              <div className="item_img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="food-name">
                <h4>{item.name}</h4>
                <div className="increase_btn">
                  <button
                    className="minus"
                    onClick={() => onDecrement(item.id)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="plus"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="price">
                <TfiTrash className="trash" onClick={() => onDelete(item.id)} />
                <h4>₦ {item.price.toLocaleString()}</h4>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="total">
          <h3>Total</h3>
          <h3>{total.toLocaleString()}</h3>
        </div>
        <button onClick={onCheckout} disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </CartBox>
  );
};

export default CartContainer;
