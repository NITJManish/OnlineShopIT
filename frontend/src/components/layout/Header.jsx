import React from "react";
import Search from "./Search";
import { useGetMeQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/api/authApi";

const Header = () => {
  const navigate = useNavigate();

  const { isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    logout();
    navigate(0);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light">
  <div className="container-fluid">
    {/* Logo Section */}
    <Link to="/" className="navbar-brand ps-2 ps-md-5">
      <img src="/images/shopit_logo.png" alt="ShopIT Logo" />
    </Link>

    {/* Toggle button for mobile view */}
    <button
      className="navbar-toggler bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Collapsible content */}
    <div className="collapse navbar-collapse" id="navbarMenu">
      {/* Centered Search Bar */}
      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search />
      </div>

      {/* Cart and User Section */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/cart" className="nav-link" style={{ textDecoration: "none" }}>
            <span id="cart" className="ms-3 ">Cart</span>
            <span className="ms-1" id="cart_count">{cartItems?.length}</span>
          </Link>
        </li>

        {/* User Dropdown */}
        {user ? (
          <li className="nav-item dropdown">
            <button
              className="btn dropdown-toggle text-white"
              type="button"
              id="dropDownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <figure className="avatar avatar-nav">
                <img
                  src={
                    user?.avatar
                      ? user?.avatar?.url
                      : "/images/default_avatar.jpg"
                  }
                  alt="User Avatar"
                  className="rounded-circle"
                />
              </figure>
              <span className="ms-2">{user?.name}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropDownMenuButton">
              {user?.role === "admin" && (
                <li>
                  <Link className="dropdown-item" to="/admin/dashboard">Dashboard</Link>
                </li>
              )}
              <li>
                <Link className="dropdown-item" to="/me/orders">Orders</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/me/profile">Profile</Link>
              </li>
              <li>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        ) : (
          !isLoading && (
            <li className="nav-item">
              <Link to="/login" className="btn ms-4" id="login_btn">
                Login
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  </div>
</nav>


  );
};

export default Header;
