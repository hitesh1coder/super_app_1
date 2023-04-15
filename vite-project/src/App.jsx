import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomeSection/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Register />} /> */}
          {/* <Route path="/category" element={<Category />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
