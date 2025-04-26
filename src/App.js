// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="h-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
 <Route path="/Quizz-Web-App" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/education" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
