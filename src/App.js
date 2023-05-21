import Navbar from "./components/Navbar";
import "./App.css";
import Homepage from "./components/Homepage";
import Headroom from "react-headroom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.js";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="homepage">
      <Headroom>
        <Navbar />
      </Headroom>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="venues" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
