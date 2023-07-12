import React from 'react'
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";
import Autoplay from "embla-carousel-autoplay";
import "../jsons/accomadation_pics.js";
import { rooms, villa, rooms2 } from "../jsons/accomadation_pics.js";
export default function Venues() {
  
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef3] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div>
      <br />
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villa">
          <div className="villades">
            <div className="text12">
              <h3>Banquet Halls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
                amet harum earum soluta! Molestiae sit ex harum nesciunt? Sequi
                quia quibusdam quam culpa accusamus suscipit, ipsa minus
                accusantium possimus.
              </p>
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
        <div className="villarev">
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
              <h3>Lawn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
                amet harum earum soluta! Molestiae sit ex harum nesciunt? Sequi
                quia quibusdam quam culpa accusamus suscipit, ipsa minus
                accusantium possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="accomdiv">
        {/* <h2>Villa</h2> */}
        <div className="villa">
          <div className="villades">
          <div className="text12">
              <h3>Party Halls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
                amet harum earum soluta! Molestiae sit ex harum nesciunt? Sequi
                quia quibusdam quam culpa accusamus suscipit, ipsa minus
                accusantium possimus.
              </p>
            </div>
          </div>
          <div className="villapics">
            <div className="embla" ref={emblaRef3}>
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
        <div className="villarev">
          <div className="villapics">
            <div className="embla" ref={emblaRef4}>
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
              <h3>Pool</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea
                amet harum earum soluta! Molestiae sit ex harum nesciunt? Sequi
                quia quibusdam quam culpa accusamus suscipit, ipsa minus
                accusantium possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}
