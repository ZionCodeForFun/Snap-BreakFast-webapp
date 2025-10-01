import React from "react";
import { Container } from "../../style/DashboardStyle";
import { IoRestaurantOutline } from "react-icons/io5";
import { TbBike } from "react-icons/tb";
import { Link } from "react-router-dom"; 

import {restaurants} from '../../api/Product'

const Dashboard = () => {

  return (
    <Container>
      <article className="wrapper">
     
        <div className="restaurant_icon">
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
