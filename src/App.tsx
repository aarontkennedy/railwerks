import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import FrontPage from "./pages/frontPage/FrontPage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Food from "./pages/food/Food";

function App() {
  return (
    <div className="railwerks">
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="about" element={<About />} />
        <Route path="food" element={<Food />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
