import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
