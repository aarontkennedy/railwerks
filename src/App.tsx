import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import FrontPage from "./pages/frontPage/FrontPage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="railwerks">
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
