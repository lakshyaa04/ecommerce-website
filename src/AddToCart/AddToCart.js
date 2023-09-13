function AddToCart(props) {
  function increment() {
    props.addToCart(props.product);
  }
  return <button onClick={increment}> Add to cart</button>;
}

export default AddToCart;
