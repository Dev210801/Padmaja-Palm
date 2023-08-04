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
              Padmaja Palm Groves Resort Conventions, which spans 18+ acres, is a
              diverse complex where people come together to celebrate culture,
              exchange ideas, enjoy art, and take in the history and energy of our
              wonderful city. You can conceptualise and produce an event with our
              Conventions that embodies your idea of a significant celebration. We
              provide many options that can match your dream festival in the shape
              of grand event halls, lush green lawns, villas, and parking, all
              with the personal touch of our staff of committed experts. Both the
              food we provide and the method by which we serve it are of the
              highest quality. All breakfast, lunch, and dinner options are
              prepared with care and served hot. Your taste buds will be delighted
              by every bite of our cuisine.
          </div>
        </div>
        <div className="caras">
          <Carousel homecaro={homecaro} />
        </div>
      </div>
      <Counter />
    </div>
  );
}
