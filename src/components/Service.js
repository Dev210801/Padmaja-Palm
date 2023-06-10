import React from "react";
import "../styles/service.css";
import "../jsons/services.js";
import {data} from "../jsons/services.js"
export default function Service() {
  
  return (
    <div className="mmm">
    {/* <img src={imgbg} alt="" className="imgbg2" /> */}
    {
      data.map((items) => {
        if(items.id % 2 === 0){
          return(
            <div className="maindiv" key={items.id}>
<div className="text1">
  <h3>{items.title}</h3>
  <p>{items.matter}</p>
</div>
<div className="imgser">
  
  <img src={items.imglink} alt="" id="igsam"/>
</div>
    </div>

          );
        }
        else{
          return(
            <div className="maindivrev" key={items.id}>
            <div className="imgser">
              <img src={items.imglink} alt="" id="igsam"/>
            </div>
            <div className="text1">
              <h3>{items.title}</h3>
              <p>{items.matter}</p>
            </div>
                </div>
          );
        }
      })
    }
    {/* <div className="maindiv">
<div className="text1">
  <h3>heading</h3>
  <p>matter</p>
</div>
<div className="imgser">
  <img src={igsam} alt="" id="igsam"/>
</div>
    </div> */}
    {/* <div className="maindivrev">
<div className="imgser">
  <img src={igsam} alt="" id="igsam"/>
</div>
<div className="text1">
  <h3>heading</h3>
  <p>matter</p>
</div>
    </div> */}
    </div>
  );
}
