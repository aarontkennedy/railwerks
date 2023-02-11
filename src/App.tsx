import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="railwerks">
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
