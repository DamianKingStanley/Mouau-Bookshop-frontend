import React, { useState, useEffect } from "react";
import "./TopHeader.css";
import { Link } from "react-router-dom";
import { FaSearch, FaPhone, FaUserCircle, FaCartPlus } from "react-icons/fa";
import Logout from "../Logout/Logout";

const TopHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = sessionStorage.getItem("token");
      return token !== null && token !== undefined;
    };

    setIsLoggedIn(checkLoginStatus());
  }, []);

  useEffect(() => {
    const userData = sessionStorage.getItem("user");

    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  const login = () => {
    window.location.href = "/login";
  };

  return (
    <div className="TopHeader">
      <section className="TopHeaderContainer">
        <div className="TopHeaderOne">
          <Link to="/">
            <h1>BOOKSHOP</h1>
          </Link>
        </div>
        <div className="TopHeaderTwo">
          <div>
            <input type="search" name="search" id="search" /> <FaSearch />
          </div>
        </div>
        <div className="TopHeaderThree">
          <div id="hotline">
            <div>
              <FaPhone />
            </div>
            <div>
              <p>
                Hotline: <br /> 09081090810
              </p>
            </div>
          </div>
          <div>
            <Link to="/cart">
              <FaCartPlus />
            </Link>
          </div>
          <div className="userPart">
            {isLoggedIn && (
              <div className="dropdown">
                <div className="userIcon">
                  <FaUserCircle className="profileIconNav" />
                </div>
              </div>
            )}

            {!isLoggedIn && (
              <button id="loginBtn" onClick={login}>
                LOGIN
              </button>
            )}
            <Logout />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopHeader;
