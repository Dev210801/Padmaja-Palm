import React from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../asserts/logo3 without bg.png';

export default function Navbar() {
  const navref = useRef();
  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };
  const [color, setcolor] = useState("transparent");
  function setscroll() {
    if (window.scrollY >= 100) {
      setcolor("white");
    } else {
      setcolor("transparent");
    }
  }
  window.addEventListener("scroll", setscroll);
  return (
    <div>
      <header style={{ background: color}}>
      <img src={logo} alt="" className="img1" />
        <nav ref={navref}>
          <NavLink onClick={showNavbar} to="/">Home</NavLink>
          <NavLink onClick={showNavbar} to="venues">About</NavLink>
          <NavLink onClick={showNavbar} to="service">Services and Facilities</NavLink>
          <NavLink onClick={showNavbar} to="gallery">Gallery</NavLink>
          <NavLink onClick={showNavbar} to="contact">Contact us</NavLink>
          <button className="navbtn navclsbtn" onClick={showNavbar} >
            <FaTimes />
          </button>
        </nav>
        <button className="navbtn" onClick={ showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
