
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import Contact from "./Components/Contact";
import React from "react";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Link to="/Home">Home</Link>
        <Link to="/About"> AboutUS</Link>
        <Link to="/Contact"> Contact</Link>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutUS />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
