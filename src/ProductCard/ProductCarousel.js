import React, { useState } from "react";

function ProductCarousel({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-container">
      <button className="prev-button" onClick={prevImage}>
        {"<"}
      </button>
      <img src={images[imageIndex]} alt="Product" />
      <button className="next-button" onClick={nextImage}>
        {">"}
      </button>
    </div>
  );
}

export default ProductCarousel;
