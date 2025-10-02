import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "../../style/DashboardStyle";
import { IoRestaurantOutline } from "react-icons/io5";
import { TbBike } from "react-icons/tb";
import {  restaurants } from "../../api/Product"; 

const Dashboard = () => {
  const navigate = useNavigate();
  

  // const ids = [
  //   { name: "chop-box", id: "68da03344519cbfb086d151a" },
  //   { name: "nosh n nibble", id: "68da03f24519cbfb086d151d" },
  //   { name: "so-fresh", id: "68da057590200e93097263d4" },
  // ];
  
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const restaurantData = await fetchRestaurants()
        setRestaurants(restaurantData);
        console.log("Restaurant ID before fetch:", restaurantData.name);
      } catch (error) {console.error("Error fetching restaurants:", error )  
        console.error("Error fetching restaurants:", error);
      }
    };
    getRestaurants();
  }, []);

        // If you want to fetch products too, make sure fetchProductsByRestaurantId is defined
      //    const restaurantWithProducts = await Promise.all(
      //     restaurantData.map(async (restaurant) => {
      //        const products = await fetchProductsByRestaurantId(restaurant.id);
      //       return { ...restaurant, products };
      //      })
      // );
      //   setRestaurants(restaurantWithProducts);


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

        <h2>Feature restaurants</h2>
        <div className="card_holder">
          {restaurants.map((restaurant) => (
            <Link
              to={`/restaurantPage/${restaurant.id}`}
              key={restaurant.id}
              className="card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="image">
                <img src={restaurant.img} alt={restaurant.name} />
              </div>
              <div className="restaurantName">
                <h6>{restaurant.name}</h6>
                <p>{restaurant.category}</p>
              </div>
              <div className="bike">
                <TbBike />
                <p>{restaurant.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </article>
    </Container>
  );
};

export default Dashboard;
