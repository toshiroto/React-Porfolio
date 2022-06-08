import React, { StrictMode } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/projects/" element={<Projects />} />
          <Route path="/index.html" element={<Intro />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
