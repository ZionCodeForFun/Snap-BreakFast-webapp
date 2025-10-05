import React, { useEffect, useState } from "react";
import ProductDetails from "../../components/pop/ProductDetails";
import { useParams } from "react-router-dom";
import { PiAlarmLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Container } from "../../style/RestaurantPageStyle";
import styled from "styled-components";
import {
  fetchRestaurantById,
  fetchProductsByRestaurantId,
} from "../../api/Product";

const RestaurantPage = ({ cart, setCart }) => {
  const { _id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const restaurantDetails = [
    {
      _id: "68da057590200e93097263d4",
      name: "So-Fresh",
      tagline: "Freshness You Can Taste",
      description:
        "Wholesome, nutrient-packed meals made from the best local produce. From smoothies to hearty bowls, So-Fresh brings nature’s goodness right to your plate.",
      rating: 4.6,
      time: "45 - 55 min",
      opening: "8:00 am - 11:00 pm",
      minOrder: "Min order: ₦ 1500",
    },
    {
      _id: "68da03344519cbfb086d151a",
      name: "Chop-Box",
      tagline: "Delicious Meals, Anytime",
      description:
        "Chop-Box serves classic Nigerian dishes with a modern twist. Comfort food that feels like home, made fresh daily.",
      rating: 4.4,
      time: "45 - 55 min",
      opening: "9:00 am - 10:00 pm",
      minOrder: "Min order: ₦ 1500",
    },
    {
      _id: "68da03f24519cbfb086d151d",
      name: "Nosh n Nibble",
      tagline: "Tasty Bites, Big Flavors",
      description:
        "From quick bites to full meals, Nosh N Nibble brings you bold flavors in every dish. Perfect for foodies on the go.",
      rating: 4.7,
      time: "45 - 55 min",
      opening: "10:00 am - 11:30 pm",
      minOrder: "Min order: ₦ 1500",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productsRes = await fetchProductsByRestaurantId(_id);
        setProducts(productsRes.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [_id]);

  const handleCart = (product) => {
    const productWithImages = {
      ...product,
      images:
        product.images && product.images.length > 0
          ? product.images
          : product.image?.url
          ? [product.image.url]
          : [],
      id: product._id || product.id,
      _id: product._id || product.id,
    };
    setCart((prev) => {
      const found = prev.find(
        (item) =>
          item._id === productWithImages._id || item.id === productWithImages.id
      );
      if (found) {
        return prev.map((item) =>
          item._id === productWithImages._id || item.id === productWithImages.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...productWithImages, quantity: 1 }];
      }
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 1500);
  };

  const handleCardClick = (product) => {
    const productWithImages = {
      ...product,
      images:
        product.images && product.images.length > 0
          ? product.images
          : product.image?.url
          ? [product.image.url]
          : [],
    };
    setSelectedProduct(productWithImages);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProduct(null);
  };

  const restaurant = restaurantDetails.find(
    (r) => String(r._id) === String(_id)
  );

  if (!restaurant) return <h2>Restaurant not found</h2>;

  const productsList = products.filter(
    (product) => String(product.restaurantId?._id) === String(_id)
  );
  console.log("zion", productsList);
  return (
    <>
      {showSuccess && (
        <SuccessNotification className="animate_animated animate_fadeInDown">
          Item successfully added to cart!
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
            <div className="time_left">
              <h6>Opening time</h6>
              <p>{restaurant.opening}</p>
            </div>
            <p className="min">{restaurant.minOrder}</p>
          </div>

          <h2 style={{ marginTop: "2rem" }}>Available Products</h2>
          {loading ? (
            <div style={{ textAlign: "center", margin: "2rem" }}>
              Loading products...
            </div>
          ) : (
            <div className="Card_holder">
              {products.length === 0 ? (
                <p>No products found for this restaurant.</p>
              ) : (
                products.map((product) => (
                  <div
                    className="card"
                    key={product._id}
                    onClick={() => handleCardClick(product)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="image">
                      <img src={product.image?.url} alt={product.name} />
                    </div>
                    <div className="content">
                      <h1>{product.name}</h1>
                      <p>{product.description}</p>
                      <h4>₦ {product.price?.toLocaleString()}</h4>
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
                ))
              )}
            </div>
          )}

          {showDetails && selectedProduct && (
            <ProductDetails
              product={{
                ...selectedProduct,
                images: selectedProduct.images || [selectedProduct.image],
              }}
              onClose={handleCloseDetails}
              onAddToCart={(productWithQty) => handleCart(productWithQty)}
            />
          )}
        </article>
      </Container>
    </>
  );
};

export default RestaurantPage;

const SuccessNotification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #28a745;
  color: #fff;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  font-size: 1.1rem;
  font-weight: bold;
  z-index: 99999;
`;
