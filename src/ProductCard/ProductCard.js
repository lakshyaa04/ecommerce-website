import "./ProductCard.css"; // Make sure to adjust the path accordingly
import React from "react";
import ProductCarousel from "./ProductCarousel"; // Update the path accordingly

function ProductCard({ product, addToCart }) {
  const { title, price, images } = product;

  return (
    <div className="box">
      <ProductCarousel images={images} />
      <div>{title}</div>
      <div>
        {price.currency} {price.value} ({price.discount})
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
