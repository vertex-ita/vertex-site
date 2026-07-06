import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import About from "./pages/About";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

      </Route>
    </Routes>
  );
}
