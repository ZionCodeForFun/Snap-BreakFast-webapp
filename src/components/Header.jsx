import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { BreakHeader } from "../style/HeaderStyle";
import logo from "../assets/header-logo.jpg";
import { TfiLocationPin } from "react-icons/tfi";
const Header = ({
  setAuthStep,
  setShowModal,
  user,
  cart,
  onCartClick,
  location,
}) => {
  const handleClick = () => {
    if (user) {
    } else {
      setAuthStep("signup");
      setShowModal(true);
    }
  };

  return (
    <BreakHeader>
      <div className="header_left">
        <img src={logo} />
        <div
          className="header_center"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {location && (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 100,
                fontSize: "1rem",
                color: "#131313",
                gap: "0.5rem",
              }}
            >
              <TfiLocationPin
                style={{ color: "#131313", fontSize: "1.3rem" }}
              />
              {location}
            </span>
          )}
        </div>
      </div>
      <div className="header_right">
        <div className="cart_icon" onClick={onCartClick}>
          <TiShoppingCart className="cart" />
          <span>{cart.length}</span>
        </div>
        {user ? (
          <div
            className="login_btn"
            style={{ gap: "0.5rem", background: "#e9f8e9", color: "#297e2a" }}
            onClick={
              typeof onProfileClick === "function" ? onProfileClick : undefined
            }
          >
            <AiOutlineUser className="user_icon" />
            <h2 style={{ fontWeight: 600 }}>
              {user.firstName
                ? `${user.firstName} ${user.lastName || ""}`
                : user.name || "Profile"}
            </h2>
          </div>
        ) : (
          <div className="login_btn" onClick={handleClick}>
            <AiOutlineUser className="user_icon" />
            <h2>Get Started</h2>
          </div>
        )}
      </div>
    </BreakHeader>
  );
};

export default Header;
