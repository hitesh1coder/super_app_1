import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomeSection/Home";
import Category from "./Components/Category/Category";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
