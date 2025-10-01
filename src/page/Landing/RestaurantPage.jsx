import React, { useEffect, useState } from "react";
import ProductDetails from "../../components/pop/ProductDetails";
import { useParams } from "react-router-dom";
import { PiAlarmLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Container } from "../../style/RestaurantPageStyle";
import styled from "styled-components";

const SuccessNotification = styled.div`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #222;
  padding: 0.75rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  font-weight: 600;
  z-index: 12000;
  font-size: 1.1rem;
`;

const RestaurantPage = ({ cart, setCart }) => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

 

  const [showSuccess, setShowSuccess] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 1500);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProduct(null);
  };

  const restaurantDetails = [
    {
      id: 1,
      name: "So-Fresh",
      tagline: "Freshness You Can Taste",
      description:
        "Wholesome, nutrient-packed meals made from the best local produce. From smoothies to hearty bowls, So-Fresh brings nature’s goodness right to your plate.",
      rating: 4.6,
      time: "35 - 45 min",
      opening: "8:00 am - 11:00 pm",
      minOrder: "Min order: ₦ 1500",
    },
    {
      id: 2,
      name: "Chop-Box",
      tagline: "Delicious Meals, Anytime",
      description:
        "Chop-Box serves classic Nigerian dishes with a modern twist. Comfort food that feels like home, made fresh daily.",
      rating: 4.4,
      time: "30 - 40 min",
      opening: "9:00 am - 10:00 pm",
      minOrder: "Min order: ₦ 1500",
    },
    {
      id: 3,
      name: "Nosh N Nibble",
      tagline: "Tasty Bites, Big Flavors",
      description:
        "From quick bites to full meals, Nosh N Nibble brings you bold flavors in every dish. Perfect for foodies on the go.",
      rating: 4.7,
      time: "25 - 35 min",
      opening: "10:00 am - 11:30 pm",
      minOrder: "Min order: ₦ 1500",
    },
  ];

  const restaurant = restaurantDetails.find((r) => r.id === Number(id));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/restaurants/${id}/products`
        );
        setProducts(res.data);
      } catch (error) {
        const fallbackProducts = [
          {
            id: 101,
            name: "Chicken Salad",
            description: "Shredded chicken, Sweetcorn & grapes",
            price: 4500,
            image:
              "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu",
          },
          {
            id: 102,
            name: "Smoothie Bowl",
            description: "Banana, oats, strawberries, chia seeds",
            price: 3500,
            image:
              "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu",
          },
          {
            id: 103,
            name: "Smoothie Bowl",
            description: "Banana, oats, strawberries, chia seeds",
            price: 3500,
            image:
              "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu",
          },
          {
            id: 104,
            name: "Smoothie Bowl",
            description: "Banana, oats, strawberries, chia seeds",
            price: 3500,
            image:
              "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu",
          },
          {
            id: 105,
            name: "Smoothie Bowl",
            description: "Banana, oats, strawberries, chia seeds",
            price: 3500,
            image:
              "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/fgxofdbzk1n0mpxqfxwu",
          },
        ];
        setProducts(fallbackProducts);
      }
    };

    fetchProducts();
  }, [id]);

  if (!restaurant) return <h2>Restaurant not found</h2>;

  return (
    <>
      {showSuccess && (
        <SuccessNotification className="animate__animated animate__fadeInDown">
          Added successfully!
        </SuccessNotification>
      )}
      <Container>
        <article className="wrapper">
          <h5>Restaurant / {restaurant.name}</h5>
          <div className="title_holder">
            <div className="title">
              <h1>{restaurant.tagline}</h1>
              <h6>{restaurant.description}</h6>
            </div>
            <p>
              <i>
                <PiAlarmLight />
              </i>{" "}
              {restaurant.time}
            </p>
          </div>
          <h3>
            {restaurant.name}{" "}
            <span>
              {restaurant.rating}{" "}
              <i>
                <FaStar />
              </i>
            </span>
          </h3>
          <div className="open_time">
            <h6>Opening time</h6>
            <p>{restaurant.opening}</p>
          </div>
          <p className="min">{restaurant.minOrder}</p>
          <div className="Card_holder">
            {products.map((product) => (
              <div
                className="card"
                key={product.id}
                onClick={() => handleCardClick(product)}
                style={{ cursor: "pointer" }}
              >
                <div className="image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="content">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <h4>₦ {product.price.toLocaleString()}</h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {showDetails && selectedProduct && (
            <ProductDetails
              product={{
                ...selectedProduct,
                images: selectedProduct.images || [selectedProduct.image],
              }}
              onClose={handleCloseDetails}
              onAddToCart={(productWithQty) => {
                handleCart(productWithQty);
              }}
            />
          )}
        </article>
      </Container>
    </>
  );
};

export default RestaurantPage;
