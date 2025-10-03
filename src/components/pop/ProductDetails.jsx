import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import food5 from "../../assets/food5.jpg";
import food7 from "../../assets/food7.jpg";
import food6 from "../../assets/food6.jpg";

import { Container } from "../../style/ProductDetailsStyle";
const ProductDetails = ({ product, onClose, onAddToCart }) => {
  // Only use product.images, no fallback
  let images = [];
  if (product?.images && product.images.length > 0) {
    if (typeof product.images[0] === "object" && product.images[0]?.url) {
      images = product.images.map((imgObj) => imgObj.url);
    } else {
      images = product.images;
    }
  }
  const [currentIdx, setCurrentIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handleMinus = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };
  const handlePlus = () => {
    setQuantity((q) => q + 1);
  };
  const handleAddToCart = () => {
    if (typeof onAddToCart === "function") {
      onAddToCart({ ...product, quantity });
    }

    setTimeout(() => setShowSuccess(false), 1500);
  };

  if (!product) return null;

  return (
    <Container>
      <article className="wrapper">
        <header className="header">
          <h1>Product details</h1>
          <IoClose className="close-btn" onClick={onClose} />
        </header>
        <div className="carousel_holder">
          <i onClick={handlePrev}>
            <IoIosArrowBack />
          </i>
          <section className="carousel_img">
            <img src={images[currentIdx]} alt="Product" />
          </section>
          <i onClick={handleNext}>
            <IoIosArrowForward />
          </i>
        </div>
        <div className="display_imgs">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Product ${idx + 1}`} />
          ))}
        </div>
        <div className="details_text">
          <h1>{product.name}</h1>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
        </div>
        <footer className="footer_btn">
          <div className="increase_btn">
            <button className="minus" onClick={handleMinus}>
              -
            </button>
            <span>{quantity}</span>
            <button className="plus" onClick={handlePlus}>
              +
            </button>
          </div>
          <button className="cart_btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </footer>
      </article>
    </Container>
  );
};

export default ProductDetails;
