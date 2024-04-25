
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import Contact from "./Components/Contact";
import SignInPage from "./pages/SignIn"
import React from "react";
import Auth from "./api/Auth";

import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <SignInPage />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route path="/" element={<SignInPage />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<AboutUS />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
