import React from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <header style={{ background: color }}>
        <h3>logo</h3>
        <nav ref={navref}>
          <Link onClick={showNavbar} to="/">Home</Link>
          <Link onClick={showNavbar} to="venues">Venues</Link>
          <Link onClick={showNavbar} to="service">Services and Facilities</Link>
          <Link onClick={showNavbar} to="gallery">Gallery</Link>
          <Link onClick={showNavbar} to="contact">Contact us</Link>
          <button className="navbtn navclsbtn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="navbtn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
