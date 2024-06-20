import React, { useState } from "react";
import "../Styles/Nav.css";
import img from "../Assets/Header.jpg";
const Nav = ({Sidebar,SetSidebar}) => {
  
  return (
    <div className={`nav  ${Sidebar?'':'extended-nav'}`}>
      <div className="contact">
        <div className="left">
          <div className="left1">
            <span>
              <i className="fa-regular fa-envelope"></i>
            </span>
            mail@chennaimath.org
          </div>
          <div className="left2">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            +91-44-24621110
          </div>
        </div>
        <div className="s-icons">
          <a href="#a">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#a">
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
      <div className="hb">
        <div className="logo">
          <img src={img} alt="" />
          <div className="menu-icon">
          <i class="fa-solid fa-bars" onClick={()=>SetSidebar(prev => prev === false ? true :false )} ></i>
          </div>
        </div>
        <div id="links" className={`navigation-buttons ${Sidebar?"":"extended-sidebar"}`}>
          <a id="home" href="/"> Home</a>
          <a href="/about-us">About us</a>
          <a href="/activities">Activities</a>
          <a href="/publications">Publications</a>
          <a href="/media">Media</a>
          <a href="/monk">Become a monk</a>
          <a href="/donate">Donate</a>
          <a href="/sale">Sale of Immovable Properties</a>
          <a href="/more">More</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
