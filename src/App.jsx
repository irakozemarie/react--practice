
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import Contact from "./Components/Contact";
import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
  

        <Routes>
         <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/About" element={<AboutUS />} />
          <Route path="/contact" element={<Contact />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
