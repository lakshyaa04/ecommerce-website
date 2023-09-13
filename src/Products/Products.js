import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard.js";

function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      Products
      {products.map((item, index) => (
        <ProductCard key={item.id} product={item} addToCart={props.addToCart} />
      ))}
    </div>
  );
}

export default Products;
