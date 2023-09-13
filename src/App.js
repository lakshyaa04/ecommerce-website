import Products from "./Products/Products.js";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [cart, setCart] = useState({});
  function addToCart(product) {
    console.log("add");
    console.log(product);
  }
  return (
    <div className="App">
      <Products addToCart={addToCart} />
    </div>
  );
}
