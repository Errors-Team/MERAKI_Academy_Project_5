/** @format */

import { Link } from "react-router-dom";
import "./navbar.css";
import { logOut } from "../../reducer/login/index";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../image/logo.png";
const NavBar = () => {
  const { isLoggedIn } = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });

  return (
    <>
      <div className="NavBar">
        <div>
          <img src={logo} />
        </div>
        <div className="Link">
          {isLoggedIn ? (
            <>
              <Link to="/homePage" style={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                Cart
              </Link>
              <Link to="/wishlist" style={{ textDecoration: "none" }}>
                Wishlist
              </Link>

              <Link
                to="/homePage"
                className="logout"
                onClick={(e) => {
                  logOut();
                  localStorage.setItem("token", "");
                }}>
                logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register{" "}
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
