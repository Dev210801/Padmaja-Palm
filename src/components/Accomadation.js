import React from "react";
import "../styles/Accomadations.css";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";
import Autoplay from "embla-carousel-autoplay";
import "../jsons/accomadation_pics.js";
// import image from "../asserts/resortpics/rooms/1.JPG"
import { rooms, villa, rooms2, exerooms } from "../jsons/accomadation_pics.js";
export default function Accomadation() {
  
  const [emblaRef2] = useEmblaCarousel({loop: true}, [Autoplay()]);
  const [emblaRef3] = useEmblaCarousel({loop: true}, [Autoplay()]);
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [Autoplay()]);
 

  return (
    <div className="mainaccom">
      <br />
      <h3 className="headin">ACCOMMODATION</h3>
      <p className="tess">
        Our Villa, Premium and Superior rooms with a luxury aesthetic you will
        adore in an oasis of peace. We offer the best exquisitely decorated
        interiors, and furnishings that radiate opulence.
      </p>
      <div className="accomdiv">
        <div className="villarev">
          <div className="villades">
            <div className="text12">
              <h3> Padmaja grand Villa </h3>
              <div className="tess">
                <b> No. of Bed Rooms: </b>8 (G + 3 floors)
                <br />
                <b> Total Area:</b> 14000 SFT <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>private lobby</li>
                    <li>Party Place</li>
                    <li>50 inch Tv</li>
                    <li>Individual Casset A/C</li>
                  </div>
                  <div className="lis2">
                    <li>Wi-Fi Facility </li>
                    <li>King Size Beds </li>
                    <li>Safe Deposit Locker</li>
                    <li>Fridge </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="villapics">
            <div className="embla" ref={emblaRef1}>
              <div className="embla__container">
                {villa.map((item, key) => (
                  <div className="embla__slide" key={key}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villa">
          <div className="villapics">
            <div className="embla" ref={emblaRef2}>
              <div className="embla__container">
               {rooms.map((item, key) => (
                <div className="embla__slide" key={key}>
                  <img src={item} alt="" />
                </div>
               ))}
              </div>
            </div>
          </div>
          <div className="villades">
            <div className="text12">
              <h3>premium rooms</h3>
              <div className="tess">
                <b> No. of Bed Rooms: </b>12 <br />
                <b> Room Size:</b> 22' X 16'5" - 363 SFT <br />
                <b> Lobby Area:</b> 1800 SFT <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>King Size Beds </li>
                    <li>50 inch Tv</li>
                    <li>Individual Casset A/C</li>
                    <li>Banquet Hall</li>
                  </div>
                  <div className="lis2">
                    <li>Wi-Fi Facility </li>
                    <li>Safe Deposit Locker</li>
                    <li>Fridge </li>

                    <li>private lobby</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villarev">
          <div className="villades">
            <div className="text12">
              <h3>superior rooms </h3>
              <div className="tess">
                <b> No. of Bed Rooms: </b>10 <br />
                <b> Room Size:</b> - <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>King Size Beds </li>
                    <li>50 inch Tv</li>
                    <li>Individual Casset A/C</li>
                  </div>
                  <div className="lis2">
                    <li>Wi-Fi Facility </li>
                    <li>Safe Deposit Locker</li>
                    <li>Fridge </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="villapics">
            <div className="embla" ref={emblaRef4}>
              <div className="embla__container">
                {rooms2.map((item, key) => (
                  <div className="embla__slide" key={key}>
                    <img src={item} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villa">
          <div className="villapics">
              <div className="embla" ref={emblaRef3}>
                <div className="embla__container">
                  
                    {exerooms.map((item, key) => (
                    <div className="embla__slide" key={key}>
                      <img src={item} alt="" />
                    </div>
                    ))}
                  
                </div>
              </div>
          </div>
          <div className="villades">
            <div className="text12">
              <h3>Executive rooms</h3>
              <div className="tess">
                <b> No. of Bed Rooms: </b>42 <br />
                <b> Room Size:</b> 21'0 x 20'0 <br />
                <div className="ameni">
                  <b> Amenities:</b> <br />
                </div>
                <div className="lis">
                  <div className="lis1">
                    <li>King Size Beds </li>  
                    <li>Safe Deposit</li>   
                    <li>Locker</li>   
                  </div>
                  <div className="lis2">
                    <li>Wi-Fi Facility </li>
                    <li>Individual Casset A/C</li>
                    <li>Fridge</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}
