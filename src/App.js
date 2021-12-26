import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Shop, Categories, Checkout, Jackets, Shoes, Whoops404 } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="shoes" element={<Shoes />} />
          <Route path="Jackets" element={<Jackets />} />
        </Route>
        <Route path="/categories" element={<Categories />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/whoops404" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
