import "./Product.css";

function Product() {
  return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src="iphone-14-pro-max-purple.jpg" alt="" />
        <h1>iPhone 14 Pro</h1>
        <p className="price">$999</p>
        <p>
          Get our best battery life ever on iPhone 14 Plus. And awesome all-day
          battery life on iPhone 14.
        </p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
