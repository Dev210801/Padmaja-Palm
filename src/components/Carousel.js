import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import img1 from '../asserts/resortpics/1.jpg'
import img3 from '../asserts/resortpics/2.jpg'

import img2 from '../asserts/Landscape with bg.png'
import '../styles/Carousel.css'

import Autoplay from 'embla-carousel-autoplay'


export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src={img2} alt="" /></div>
        <div className="embla__slide"><img src={img1} alt="" /></div>
        <div className="embla__slide"><img src={img3} alt="" /></div>
      </div>
    </div>
  )
}
