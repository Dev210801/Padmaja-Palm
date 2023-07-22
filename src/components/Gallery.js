import React, {useState} from "react";
import "../styles/Gallery.css";
import { allimgs } from "../jsons/accomadation_pics"; 
import { useEffect } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleChevronLeft, faCircleXmark, faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'
export default function Gallery() {
  const [slideNumber, setslideNumber] = useState(0)
  const [openModel, setopenModel] = useState(false)
  const handleopner = (index) => {
    setslideNumber(index)
    setopenModel(true)
  }
  useEffect(() => {
    // console.log(allimgs);
  },[])
  const closebtn = () => {
    setopenModel(false)
  }
  const prev = () => {
    slideNumber === 0? setslideNumber(allimgs.length - 1) : setslideNumber(slideNumber - 1)
  }
  const next = () => {
    setslideNumber((slideNumber + 1) % allimgs.length)
  }
  
  return (
    <div className="out">
      {
        openModel && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="btnclse" onClick={closebtn}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="btnprev" onClick={prev}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className="btnnxt" onClick={next}/>
          <div className="fullscreenimg">
            <img src={allimgs[slideNumber]} alt="" />
          </div>
        </div>
      }
    <div className="outter">
      
      {allimgs.map((a, index) => 
      <div className="single" key={index} onClick={() => handleopner(index)}>
        <img src={a} alt="" />

      </div>
      )}
    </div>
      </div>
  );
}
