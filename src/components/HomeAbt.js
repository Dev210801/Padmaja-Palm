import React from "react";
import "../styles/HomeAbt.css";
import Carousel from "./Carousel";
import Counter from "./Counter";
import "../jsons/Homecarousel";
// import About from "./About";
import { homecaro } from "../jsons/Homecarousel";

export default function HomeAbt() {
  return (
    <div className="homabt">
      <div className="homecar">
        {/* <About /> */}
        <div className="text">
          <h2>Padmaja Palm Groves</h2>
          <div className="matter">
            As the premier destination for resort conventions, we proudly stand
            as the largest and most exquisite choice for your gatherings. With
            our luxurious offering of 70 impeccably designed rooms, we ensure
            that your stay with us is marked by opulence and comfort. Nestled
            amidst lush expanses, our resort boasts vast lawns that lend an air
            of grandeur to any occasion. Whether you're seeking a serene spot
            for leisurely walks or envisioning an elaborate event under the open
            sky, our sprawling lawns provide the canvas for your dreams to come
            alive. Our commitment to aesthetic brilliance extends to every
            corner of our resort. Immerse yourself in the breathtaking beauty of
            our meticulously crafted landscapes, where nature's splendor
            intertwines with human artistry. Every vista presents a picturesque
            view, enhancing your sense of tranquility and delight. For those
            envisioning a fairy-tale wedding, Padmaja Palm Groves is your canvas
            of romance. Our resort is tailor-made for destination weddings,
            offering a blend of elegance and enchantment that will make your
            special day truly extraordinary.Exchange vows amidst the beauty of
            nature, and let the surroundings mirror the love you share. And
            what's a paradise without a little indulgence? Dive into the
            pleasure of our pool parties, where relaxation meets revelry. Our
            poolside expanse offers the ideal setting to unwind, celebrate, and
            create memories that shimmer in the sun.At Padmaja Palm Groves
            Resort & Conventions, we invite you to be a part of a legacy of
            luxury, natural grandeur, and moments that last a lifetime. Whether
            it's a corporate event, a cherished celebration, or a romantic
            escape, we're here to transform your experience into an
            unforgettable masterpiece.
          </div>
        </div>
        <div className="caras">
          <div className="carasimg">
          <Carousel homecaro={homecaro} />

          </div>
        </div>
      </div>
      <Counter />
    </div>
  );
}
