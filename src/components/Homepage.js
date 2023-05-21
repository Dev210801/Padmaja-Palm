import React from 'react';
import vid from "../asserts/bgvideo.mp4";
import About from "../components/About";
import Typewriter from 'typewriter-effect';
import "../styles/Hompage.css"
export default function Homepage() {
  return (
    <div>
        <video src={vid} autoPlay loop muted></video>
      <div className="sampletext">
      <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Welcome to Hyderabad’s New Resort Conventions').start();
  }}
/>
      </div>
      <div className="aboutfoot">
        <About />
        <About />
        <About />
        <About />
        <About /> 
      </div>
    </div>
  )
}
