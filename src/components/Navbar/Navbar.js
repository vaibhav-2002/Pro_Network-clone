import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Navbar">
        <div className="Nabar_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU"></img>
          <input className="navbar_left" placeholder="Search User"></input>
        </div>
        <div className="navbar_right">
          <p>Hi,name</p>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/about-us")}>About us</p>
          <p onClick={() => navigate("/profile")}>Profile</p>
          <p>DarkMode</p>
          <button>Logout</button>
        </div>
      </div>
      <hr className="navbar_line"></hr>
    </div>
  );
};
export default Navbar;
