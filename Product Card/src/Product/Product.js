import "./Product.css";

function Product({ name, price, img, des }) {
  return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p className="price">${price}</p>
        <p>{des}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
