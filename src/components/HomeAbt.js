import React from "react";
import "../styles/HomeAbt.css";
import Carousel from "./Carousel";
import Counter from "./Counter";

export default function HomeAbt() {
  return (
    <div className="homabt">
      <div className="homecar">
        <div className="text">
          <h2>Padmaja Palm Groves</h2>
          <div className="matter">
            Padmaja Palm Groves Resort Conventions, which spans 18.5 acres, is a
            diverse complex where people may come together to celebrate culture,
            exchange ideas, enjoy art, and take in the history and energy of our
            wonderful city. You can conceptualize and produce an event with Our
            Conventions that embodies your idea of a significant celebration. We
            provide many options which can match your dream festival in the
            shape of grand event halls, lush green lawns, ballrooms, lounges,
            and parking all with the personal touch of our staff of committed
            experts. Both the food we provide and the method we serve it are of
            the highest quality. All breakfast, Lunch and dinner options are
            prepared with care and served hot. Your taste buds will be delighted
            by every bite of our cuisine.
          </div>
        </div>

        <div className="caras">
          <Carousel />
        </div>
      </div>
      <Counter />
    </div>
  );
}
