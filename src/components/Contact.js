import React from "react";
import '../styles/contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Mapsetup from "./Mapsetup";

export default function Contact() {
  
  return (
    <div className="outter1"><br /><br />
      <h1>Contact</h1>
      
      <h3><FontAwesomeIcon icon={faPhone}/> 090007 79444</h3>
      <h3><FontAwesomeIcon icon={faEnvelope}/> padmajapalms@gmail.com</h3><br />
      <h5> <span className="ss">
         ADDRESS: 
        </span>
        {'\u00A0'} sy no 294, Airport road Mamidpally, Balapur mandal Rangareddy dist. <br />
Landmark : Mamidpally to Jalpally Rd, Hyderabad, Telangana 500005.</h5>
      <h6>Nearby Rajiv Gandhi International Airport, And Nehru The Outer Ring Road is just a few minutes away.</h6>
    <div className="mapset1">
      <Mapsetup zooml={8} />
    </div>
    </div>
  );
}
