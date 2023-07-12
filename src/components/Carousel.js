import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../styles/Carousel.css'
import Autoplay from 'embla-carousel-autoplay'


export default function Carousel({homecaro}) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
          homecaro.map((item, key) => <div className="embla__slide" key={key}><img src={item} alt="" /></div>)
        }
        {/* <div className="embla__slide"><img src={img2} alt="" /></div>
        <div className="embla__slide"><img src={img1} alt="" /></div>
        <div className="embla__slide"><img src={img3} alt="" /></div> */}
      </div>
    </div>
  )
}
