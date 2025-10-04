import React, { useState } from "react";
import Network from "../../components/pop/Network";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { Container } from "../../style/CheckOutStyle";
import { IoRestaurantOutline, IoLocationOutline } from "react-icons/io5";

const CheckOutPage = ({ cart, setCart, user, setShowModal, setAuthStep }) => {
  const [showNetwork, setShowNetwork] = useState(false);
  const navigate = useNavigate();

  const [extraCutlery, setExtraCutlery] = useState(false);
  const [extraWater, setExtraWater] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = 750;
  const deliveryFee = 350;
  const grandTotal =
    totalPrice + delivery + deliveryFee + (extraWater ? 500 : 0);

  const handleIncrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    if (!user) {
      if (setShowModal && setAuthStep) {
        setAuthStep("signup");
        setShowModal(true);
      } else {
        navigate("/", { replace: true });
      }
      return;
    }
    setShowNetwork(true);
  };

  return (
    <Container>
      <article className="wrapper">
        <header className="summary">
          <h2>
            <FaArrowLeft /> order summary
          </h2>
        </header>
        <div className="checkout_holder">
          <div className="left">
            <div className="food-details-holder">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div className="food-details" key={item.id || item._id}>
                    
                    <div className="btn_holder">
                      <button
                        onClick={() => handleDecrement(item.id || item._id)}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => handleIncrement(item.id || item._id)}
                      >
                        +
                      </button>
                    </div>
                    <h2>{item.name}</h2>
                    <p>₦{item.price.toLocaleString()}</p>
                  </div>
                ))
              )}
            </div>
            <div className="need-extra-holder">
              <div className="need-extra">
                <i className="cutlary-icon">
                  <IoRestaurantOutline />
                </i>
                <div className="text_holder">
                  <h1>Need extra cutlery?</h1>
                  <p>
                    Help us minimise waste. Only ask for cutlery when you need
                    it.
                  </p>
                </div>
                <div className="toogle">
                  <i
                    className={extraCutlery ? "on" : "off"}
                    onClick={() => setExtraCutlery((v) => !v)}
                  >
                    {extraCutlery ? <FaToggleOn /> : <FaToggleOff />}
                  </i>
                </div>
              </div>
              <div className="need-extra">
                <i className="cutlary-icon">
                  <FaBottleWater />
                </i>
                <div className="text_holder">
                  <h1>Need bottled water?</h1>
                  <p>Tick if you want bottled water (₦500 extra).</p>
                </div>
                <div className="toogle">
                  <i
                    className={extraWater ? "on" : "off"}
                    onClick={() => setExtraWater((v) => !v)}
                  >
                    {extraWater ? <FaToggleOn /> : <FaToggleOff />}
                  </i>
                </div>
              </div>
              <footer className="checkout-footer">
                <h1>Delivery address</h1>
                <div className="location">
                  <IoLocationOutline className="i" />
                  <h2>festac town close</h2>
                </div>
                <h1>Delivery time</h1>
              </footer>
              <footer className="time">
                <h2>Standard</h2>
                <p>45-55 min</p>
              </footer>
            </div>
          </div>
          <div className="right">
            <header className="header">
              <h1>Summary</h1>
              <img
                src={
                  cart && cart.length > 0
                    ? cart[0].images && cart[0].images.length > 0
                      ? typeof cart[0].images[0] === "object" &&
                        cart[0].images[0].url
                        ? cart[0].images[0].url
                        : cart[0].images[0]
                      : cart[0].image || "https://via.placeholder.com/80"
                    : "https://via.placeholder.com/80"
                }
                alt={cart && cart.length > 0 ? cart[0].name : "Summary"}
              />
            </header>
            <section className="summary">
              <div className="total_holder">
                <h3>Total items</h3>
                <h3>₦{totalItems}</h3>
              </div>
              <div className="delivery">
                <h4>Delivery </h4>
                <h4>₦{delivery.toLocaleString()}</h4>
              </div>
              <div className="deliverytime">
                <h4>Delivery fee</h4>
                <h4>₦{deliveryFee.toLocaleString()}</h4>
              </div>
              {extraWater && (
                <div className="deliverytime">
                  <h4>Bottled Water</h4>
                  <h4>500</h4>
                </div>
              )}
              <div className="totalprice">
                <h2>Total</h2>
                <h2>₦{grandTotal.toLocaleString()}</h2>
              </div>
            </section>
            <button
              className="pay-to-order-btn"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Pay to order
            </button>
            {showNetwork && <Network onClose={() => setShowNetwork(false)} />}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default CheckOutPage;
