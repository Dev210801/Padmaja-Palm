import React from 'react';
import vid from "../asserts/bgvideo.mp4";
import About from "../components/About";
import "../styles/Hompage.css"
import Counter from './Counter';
export default function Homepage() {
  return (
    <div>
        <video src={vid} autoPlay loop muted></video>
      <div className="homepagetext">
      <div className="container">
   <div className="box">

      <div className="title">
         <span className="block"></span>
         <h1>Welcome to Hyderabad’s</h1>
      </div>

      <div className="role">
         <div className="block"></div>
         <p>New Resort Conventions</p>
      </div>

   </div>
</div>

      {/* Welcome to Hyderabad’s<br/>
         New Resort Conventions */}
       
      </div>
      <div className="aboutfoot">
        <About /> 
        <Counter/>
        <About /> 
      </div>
    </div>
  )
}
