import React from "react";

const Button = ({ className, text, onclick, type }) => {
  return (
    <div>
      <button
        style={{ cursor: "pointer" }}
        type={type}
        className={className}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
