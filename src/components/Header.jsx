import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrentLocation } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { BreakHeader } from "../style/HeaderStyle";
import logo from "../assets/header-logo.jpg";
import InputAddress from "./pop/InputAddress";
const restaurantList = ["So-Fresh", "Chop-Box", "Nosh N Nibble"];

// function RestaurantSearch() {
//   const [query, setQuery] = React.useState("");
//   const [results, setResults] = React.useState([]);

//   React.useEffect(() => {
//     if (query.trim() === "") {
//       setResults([]);
//       return;
//     }
//     setResults(
//       restaurantList.filter((r) =>
//         r.toLowerCase().includes(query.trim().toLowerCase())
//       )
//     );
//   }, [query]);

// return (
// <div style={{ minWidth: 250 }}>
//   <input
//     type="text"
//     placeholder="Search restaurants..."
//     value={query}
//     onChange={(e) => setQuery(e.target.value)}
//     style={{
//       padding: "0.7rem 1rem",
//       borderRadius: "0.5rem",
//       border: "none",
//       outline:"none",
//       fontSize: "1rem",
//       width: "100%",
//       position: "absolute",
//       top:0,
//       marginBottom:"2rem",

//       left: "200%",
//       zIndex: 99999,
//     }}
//   />
//   {results.length > 0 && (
//     <div
//       style={{
//         position: "absolute",
//         top: "2.5rem",
//         left: "200%",

//         background: "#fff",
//         border: "1px solid #eee",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//         zIndex: 9900,
//         minWidth: "220px",
//         borderRadius: "0.5rem",
//         maxHeight: "200px",
//         overflowY: "auto",
//       }}
//     >
//       {results.map((r, idx) => (
//         <div
//           key={idx}
//           style={{
//             padding: "0.5rem 1rem",
//             borderBottom: "1px solid #f0f0f0",
//             cursor: "pointer",
//             fontSize: "0.95rem",
//             color: "#333",
//           }}
//         >
//           {r}
//         </div>
//       ))}
//     </div>
//   )}
// </div>
//   );
// }

const Header = ({
  setAuthStep,
  setShowModal,
  user,
  cart = [],
  onCartClick,
  location,
  addresses = [],
  setHeaderLocation,
  onProfileClick,
}) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      setAuthStep("signup");
      setShowModal(true);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".header_center")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <BreakHeader>
      <div className="header_left">
        <img
          src={logo}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          alt="Logo"
        />
        <div
          className="header_center"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1rem",
            position: "relative",
          }}
        >
          {location && (
            <div style={{ position: "relative" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 100,
                  fontSize: "1rem",
                  color: "#131313",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
                tabIndex={0}
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <TbCurrentLocation
                  style={{ color: "#131313", fontSize: "1.3rem" }}
                />
                {location.length > 20
                  ? location.slice(0, 20) + "..."
                  : location}
                <span style={{ fontSize: "1.4rem", marginLeft: "0.3rem" }}>
                  <IoIosArrowDown />
                </span>
              </span>

              {showDropdown && addresses.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "2.2rem",
                    left: 0,
                    background: "#fff",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    zIndex: 10,
                    minWidth: "220px",
                    borderRadius: "0.5rem",
                  }}
                >
                  {addresses.map((addr, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "0.5rem 1rem",
                        borderBottom: "1px solid #f0f0f0",
                        cursor: "pointer",
                        fontSize: "0.95rem",
                        color: "#333",
                      }}
                      onClick={() => {
                        if (typeof setHeaderLocation === "function")
                          setHeaderLocation(addr);
                        setShowDropdown(false);
                      }}
                    >
                      {addr.length > 20 ? addr.slice(0, 20) + "..." : addr}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {user && <InputAddress />}
        </div>
      </div>

      <div className="header_right">
        <div className="cart_icon" onClick={onCartClick}>
          <TiShoppingCart className="cart" />
          <span>{cart?.length || 0}</span>
        </div>

        {user ? (
          <div
            className="login_btn"
            style={{ gap: "0.5rem", cursor: "pointer" }}
            onClick={
              typeof onProfileClick === "function" ? onProfileClick : undefined
            }
          >
            <AiOutlineUser
              className="user_icon"
              style={{ background: "#297e2a", color: "#131313" , pointerEvents: "none"}}
            />
            <h2 style={{ fontWeight: 600 }}>
              {user.firstName
                ? `${user.firstName} ${user.lastName || ""}`
                : user.name || "Profile"}
            </h2>
          </div>
        ) : (
          <div className="login_btn" onClick={handleClick}>
            <AiOutlineUser className="user_icon" />
            <h2>Login</h2>
          </div>
        )}
      </div>
    </BreakHeader>
  );
};

export default Header;
