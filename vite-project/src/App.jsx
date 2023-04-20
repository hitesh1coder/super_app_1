import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomeSection/Home";
import Register from "./Components/Auth/Register";
import Category from "./Components/Category/Category";
import Entertainment from "./Components/EntainMent/Entertainment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
