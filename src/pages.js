import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="shop">Shop</Link>
        <Link to="categories">Categories</Link>
        <Link to="checkout">Checkout</Link>
      </nav>
    </div>
  );
}

export function Shop() {
  return (
    <div>
      <h2>[Shop]</h2>
      <Outlet />
      <Link to="jackets">Jackets</Link>
      <Link to="shoes">Shoes</Link>
    </div>
  );
}

export function Shoes() {
  return (
    <div>
      <h2>Our Shoes</h2>
    </div>
  );
}

export function Jackets() {
  return (
    <div>
      <h2>Our Jackets</h2>
    </div>
  );
}

export function Categories() {
  return (
    <div>
      <h2>[Categories]</h2>
    </div>
  );
}

export function Checkout() {
  return (
    <div>
      <h2>[Checkout]</h2>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
