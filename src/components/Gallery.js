import React, {useState} from "react";
import "../styles/Gallery.css";
import "../jsons/services.js"
import {data} from '../jsons/services.js'
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
    console.log(data);
  },[])
  const closebtn = () => {
    setopenModel(false)
  }
  const prev = () => {
    slideNumber === 0? setslideNumber(data.length - 1) : setslideNumber(slideNumber - 1)
  }
  const next = () => {
    setslideNumber((slideNumber + 1) % data.length)
  }
  
  return (
    <div className="out">
      {
        openModel && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="btnclse" onClick={closebtn}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="btnprev" onClick={prev}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className="btnnxt" onClick={next}/>
          <div className="fullscreenimg">
            <img src={data[slideNumber].imglink} alt="" />
          </div>
        </div>
      }
    <div className="outter">
      
      {data.map((a, index) => 
      <div className="single" key={a.id} onClick={() => handleopner(index)}>
        <img src={a.imglink} alt="" />

      </div>
      )}
    </div>
      </div>
  );
}
