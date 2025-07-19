//import {useRef,React} from "react";
import "../styles/Accomadations.css";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/Carousel.css";
import Autoplay from "embla-carousel-autoplay";
import "../jsons/accomadation_pics.js";
import {accomadation_details} from "../jsons/accomadation_details.js";
import website from "../jsons/website_details.js";
export default function Accomadation() {
  
  const [emblaRef2] = useEmblaCarousel({loop: true}, [Autoplay()]);
  const [emblaRef3] = useEmblaCarousel({loop: true}, [Autoplay()]);
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef4] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const emblaRefs = [emblaRef2,emblaRef4,emblaRef1,emblaRef3];

  return (
    <div className="mainaccom">
      <br />
      <h3 className="headin">ACCOMMODATION</h3>
      <p className="tess">
       {accomadation_details}
      </p>
      {Object.entries(website.Accomodations).map(([type, data], sectionIndex) =>{
        const curremblaRef = emblaRefs[sectionIndex];
        const half = Math.ceil(data.Amenities.length / 2);
        const firstList = data.Amenities.slice(0, half);
        const secondList = data.Amenities.slice(half);
        if(sectionIndex%2!==0)
        {
          return(
            <div className="accomdiv">
              <div className="villa"> 
                <div className="villapics">
                  <div className="embla" ref={curremblaRef}>
                    <div className="embla__container">
                      {data.images.map((item, key) => (
                        <div className="embla__slide" key={key}>
                          <img src={item} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="villades">
                  <div className="text12">
                      <h3>{type}</h3> 
                      <div className="tess">
                        {data.details.map((item, index) => {
                          const [key, value] = Object.entries(item)[0];
                          return (
                            <>
                            <b key={index}>{key}</b>: {value}
                            <br />
                            </>
                            );
                          })}
                          <div className="ameni">
                            <b> Amenities:</b> <br />
                          </div>  
                           <div className="lis">
                            <div className="lis1">
                              {firstList.map((item, index) => (
                                <li key={`first-${index}`}>{item}</li>
                              ))}
                            </div>
                            <div className="lis2">
                              {secondList.map((item, index) => (
                                <li key={`first-${index}`}>{item}</li>
                              ))}
                            </div>
                          </div>                  
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          );
        }
        else
        {
          return(
            <div className="accomdiv">
              <div className="villarev"> 
                <div className="villades">
                  <div className="text12">
                      <h3>{type}</h3> 
                      <div className="tess">
                        {data.details.map((item, index) => {
                          const [key, value] = Object.entries(item)[0];
                          return (
                            <>
                            <b key={index}>{key}</b>: {value}
                            <br />
                            </>
                            );
                          })}
                          <div className="ameni">
                            <b> Amenities:</b> <br />
                          </div>  
                           <div className="lis">
                            <div className="lis1">
                              {firstList.map((item, index) => (
                                <li key={`first-${index}`}>{item}</li>
                              ))}
                            </div>
                            <div className="lis2">
                              {secondList.map((item, index) => (
                                <li key={`first-${index}`}>{item}</li>
                              ))}
                            </div>
                          </div>                  
                      </div>
                    </div>
                  </div>
                  <div className="villapics">
                  <div className="embla" ref={curremblaRef}>
                    <div className="embla__container">
                      {data.images.map((item, key) => (
                        <div className="embla__slide" key={key}>
                          <img src={item} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
            </div>
          );
        }
      })}
      <br />
    </div>
  );
}
