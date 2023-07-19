import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./components/Homepage";
import Headroom from "react-headroom";
import { Routes, Route } from "react-router-dom";
// import About from "./components/About.js";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Accomadation from "./components/Accomadation";
import Venues from "./components/Venues";
// import "../jsons/services.js";
import {data} from "./jsons/services";

function App() {
  return (
    <div className="homepage">
      <Headroom>
        <Navbar />
      </Headroom>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="service" element={<Service data = {data} />} />
        <Route path="accommodation" element={<Accomadation/>}/>
        <Route path="venues" element={<Venues/>}/>
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
