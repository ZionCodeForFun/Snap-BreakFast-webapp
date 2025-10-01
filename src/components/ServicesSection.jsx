import React from "react";
import { Container } from "../style/ServiceSectionstyle";
import { FaArrowDownLong } from "react-icons/fa6";
import food1 from "../assets/food1.jpg";
import food4 from "../assets/food4.jpg";
import food12 from "../assets/food12.jpg";
import food13 from "../assets/food13.jpg";
import food14 from "../assets/food14.jpg";

const ServicesSection = () => {
  return (
    <Container>
      <article className="wrapper">
        <div className="available_cities">
          <h2>Cities where you can order breakfast in Lagos</h2>
          <div className="cities">
            <p>Ikeja</p>
            <p>Ogudu</p>
            <p>Surulere</p>
            <p>Lekki</p>
            <p>Gbagada</p>
          </div>
          <h1>What we do.</h1>
        </div>
        <div className="what_we_do_holder">
          <div className="content_holder">
            <div className="img_holder">
              <img src={food12} alt="" />
            </div>
            <h2>Freshly Made Breakfast</h2>
            <p>
              Kickstart your day with healthy and delicious breakfast options.
              From pancakes to grilled fish and smoothies we serve meals that
              fuel your mornings.
            </p>
          </div>
          <div className="content_holder">
            <div className="img_holder">
              <img src={food1} alt="" />
            </div>
            <h2>Fast & Reliable Delivery</h2>
            <p>
              Your breakfast, hot and fresh, delivered right to your doorstep or
              office in minutes. No long waits just quick service.
            </p>
          </div>
          <div className="content_holder">
            <div className="img_holder">
              {" "}
              <img src={food4} alt="" />
            </div>
            <h2>Fresh Juices & Drinks</h2>
            <p>
              Pair your meal with freshly pressed juices, smoothies, and coffee
              made to keep you energized all day.
            </p>
          </div>
        </div>
        <div className="JoinUs_partner">
          <div className="just_h1">
            <h1>
              Join our growing network{" "}
              <i>
                <FaArrowDownLong />
              </i>
            </h1>
          </div>
          <div className="content_holder">
            <div className="left_content">
              <h2>Become a vendor</h2>
              <p>
                Get more orders, more visibility, and more control.
                SnapBreakfast connects your kitchen to thousands of customers,
                helping you manage orders seamlessly and grow your brand faster.
                Join today and take your sales to the next level.
              </p>
              <button
                className="partner_btn"
                onClick={() =>
                  window.open("https://wa.me/2347012345678", "_blank")
                }
              >
                Partner with us
              </button>
            </div>
            <div className="right_content">
              <img src={food14} alt="" />
            </div>
          </div>
          <div className="content_holder2">
            <div className="left_content">
              <h2>Earn with SnapBreakfast</h2>
              <p>
                Turn your passion into profit with Foodelo. Whether you're a
                chef, vendor, or delivery partner, our platform helps you earn
                more by connecting you daily with hungry customers.
              </p>
              <button
                className="partner_btn"
                onClick={() =>
                  window.open("https://wa.me/2347012345678", "_blank")
                }
              >
                Partner with us
              </button>
            </div>
            <div className="right_content">
              <img src={food13} alt="" />
            </div>
          </div>
          <div></div>
        </div>
      </article>
    </Container>
  );
};

export default ServicesSection;
