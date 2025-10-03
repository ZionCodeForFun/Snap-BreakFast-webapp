import React, { useState, useEffect } from "react";
import Auth from "./auth/Auth";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./page/Landing/LandingPage";
import Dashboard from "./page/Landing/Dashboard";
import RestaurantPage from "./page/Landing/RestaurantPage";
import Header from "./components/Header";
import { Header_holder, Footer_holder } from "./style/AppStyle";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CartContainer from "./components/CartContainer";
import CheckOutPage from "./page/Landing/CheckOutPage";
import Logout from "./components/pop/Logout";
import Address from "./components/pop/Address";
import ProfileLogout from "./components/pop/ProfileLogout";
import OrderSuccess from "./components/pop/OrderSuccess";
import Network from "./components/pop/Network";

const AppInner = () => {
  const addresses = ["Ogudu", "Festac", "Surulere", "Lekki", "Ikeja"];
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [showModal, setShowModal] = useState(false);
  const [authStep, setAuthStep] = useState("signup");
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [showCart, setShowCart] = useState(false);
  const [showProfileLogout, setShowProfileLogout] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: "0005",
      address: "4th Avenue H Close House 2",
      eta: "45 - 55 mins",
      contact: "07000000101",
    },
  ]);
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const [headerLocation, setHeaderLocationRaw] = useState("");
  const navigate = useNavigate();
  const [location, setLocation] = useState("Default Location");

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  console.log("User state changed:", user);

  const setHeaderLocation = (address) => {
    setHeaderLocationRaw(address);
    navigate("/dashboard");
  };

  const handleLiveLocation = (location) => {
    if (
      location &&
      location.city &&
      location.city.toLowerCase().includes("lagos")
    ) {
      setHeaderLocation(location.address || location.city);
    } else {
      alert("Location not in Lagos.");
    }
  };

  const handleLocationInputClick = () => {
    setShowAddressPopup(true);
  };

  const handleCheckout = () => {
    if (cart.length > 0 && user) {
      const newOrder = {
        id: Date.now().toString(),
        address: headerLocation || "No address",
        eta: "45 - 55 mins",
        contact: user?.contact || "N/A",
        items: cart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      setOrders((prev) => [...prev, newOrder]);
    }
    setShowCart(false);
    navigate("/checkout");
  };

  return (
    <>
      <ScrollToTop />
      <Header_holder>
        <Header
          user={user}
          setShowModal={setShowModal}
          setAuthStep={setAuthStep}
          cart={cart}
          onCartClick={() => setShowCart((prev) => !prev)}
          onProfileClick={() => setShowProfileLogout((prev) => !prev)}
          location={headerLocation}
          addresses={addresses}
          setHeaderLocation={setHeaderLocation}
          headerInputocation={location}
          setHeLocation={setLocation}
        />
      </Header_holder>
      {showAddressPopup && (
        <Address
          onClose={() => setShowAddressPopup(false)}
          onAddressSubmit={(address) => {
            if (address && address.toLowerCase().includes("lagos")) {
              setHeaderLocation(address);
              setShowAddressPopup(false);
            } else {
              alert("Sorry, we only deliver within Lagos.");
            }
          }}
          onDetectLocation={(location) => {
            if (
              location &&
              location.city &&
              location.city.toLowerCase().includes("lagos")
            ) {
              setHeaderLocation(location.address || location.city);
              setShowAddressPopup(false);
            } else {
              alert("Location not in Lagos.");
            }
          }}
        />
      )}
      {showProfileLogout && user && (
        <ProfileLogout
          onClose={() => setShowProfileLogout(false)}
          orders={orders}
          onLogout={() => setShowLogout(true)}
          userLocation={headerLocation}
        />
      )}
      {showLogout && (
        <Logout onClose={() => setShowLogout(false)} setUser={setUser} />
      )}
      {showOrderSuccess && (
        <OrderSuccess
          onClose={() => setShowOrderSuccess(false)}
          orders={orders}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              setShowModal={setShowModal}
              showModal={showModal}
              setAuthStep={setAuthStep}
              authStep={authStep}
              user={user}
              onLiveLocation={handleLiveLocation}
              onLocationInputClick={handleLocationInputClick}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/d" element={<Network />} />
        <Route
          path="/checkout"
          element={
            <CheckOutPage
              cart={cart}
              setCart={setCart}
              user={user}
              setShowModal={setShowModal}
              setAuthStep={setAuthStep}
            />
          }
        />
        <Route
          path="/restaurantPage/:_id"
          element={<RestaurantPage cart={cart} setCart={setCart} />}
        />
      </Routes>
      {showModal && (
        <Auth
          user={user}
          setUser={setUser}
          setShowModal={setShowModal}
          step={authStep}
          setStep={setAuthStep}
        />
      )}
      {showModal &&
        user &&
        (() => {
          setShowModal(false);
          return null;
        })()}
      )}
      {showCart && (
        <CartContainer
          cart={cart}
          onClose={() => setShowCart(false)}
          onIncrement={(id) =>
            setCart((prev) =>
              prev.map((item) =>
                item.id === id || item._id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            )
          }
          onDecrement={(id) =>
            setCart((prev) =>
              prev.map((item) =>
                item.id === id || item._id === id
                  ? {
                      ...item,
                      quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                    }
                  : item
              )
            )
          }
          onDelete={(id) =>
            setCart((prev) =>
              prev.filter((item) => item.id !== id && item._id !== id)
            )
          }
          onCheckout={handleCheckout}
        />
      )}
      <Footer_holder>
        <Footer />
      </Footer_holder>
    </>
  );
};

const App = () => (
  <HashRouter>
    <AppInner />
  </HashRouter>
);

export default App;
