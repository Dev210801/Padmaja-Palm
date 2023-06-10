import React, {useState} from 'react'
import img1 from "../asserts/istockphoto-517188688-612x612.jpg"
import img2 from "../asserts/logo3 with bg.png"

export default function Carousel() {
  const [selectedimg, setselectedimg] = useState(img1);
  const [allimgs, setallimgs] = useState([img1, img2, img1, img2])
    return (
        <div>
        <img src={selectedimg} alt="" />
        <div style={{display:"flex"}}>
            
        </div>
    </div>
  )
}
