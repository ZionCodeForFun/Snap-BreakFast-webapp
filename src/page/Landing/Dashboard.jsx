import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "../../style/DashboardStyle";
import { IoRestaurantOutline } from "react-icons/io5";
import { TbBike } from "react-icons/tb";
import { fetchRestaurants } from "../../api/Product";

const Dashboard = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRestaurants = async () => {
      setLoading(true);
      try {
        const restaurantData = await fetchRestaurants();
        setRestaurants(restaurantData?.data);
        console.log(" restaurants:", restaurantData?.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };
    getRestaurants();
  }, []);

  return (
    <Container>
      <article className="wrapper">
        <div
          className="restaurant_icon"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <i>
            <IoRestaurantOutline />
          </i>
          <p>Restaurants</p>
        </div>

        <h2>Featured Restaurants</h2>
        {loading ? (
          <div style={{ textAlign: "center", margin: "2rem" }}>
            Loading restaurants...
          </div>
        ) : (
          <div className="card_holder">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant._id}
                className="card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/restaurantPage/${restaurant._id}`)}
              >
                <div className="image">
                  <img
                    src={restaurant?.coverImage?.url}
                    alt={restaurant.name}
                    onError={(e) => {
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <div className="restaurantName">
                  <h6>{restaurant.name}</h6>
                  <p>{restaurant.description}</p>
                </div>
                <div className="bike">
                  <TbBike />
                  <p>{restaurant.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </article>
    </Container>
  );
};

export default Dashboard;
