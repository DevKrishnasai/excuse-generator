import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DisplayExcuse from "./DisplayExcuse";

const App = () => {
  return (
    <BrowserRouter basename="/excuse-generator">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excuse/:type" element={<DisplayExcuse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
