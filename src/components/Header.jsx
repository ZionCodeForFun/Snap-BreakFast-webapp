import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { BreakHeader } from "../style/HeaderStyle";
const Header = () => {
  return (
    <BreakHeader>
      <div className="header_left">
        <h1>SnapBreakfast</h1>
      </div>
      <div className="header_right">
        <div className="cart_icon">
          <TiShoppingCart className="cart" />
          <span>0</span>
        </div>
        <div className="login_btn">
          <AiOutlineUser className="user_icon" />
          <h2>Login</h2>
        </div>
      </div>
    </BreakHeader>
  );
};

export default Header;
