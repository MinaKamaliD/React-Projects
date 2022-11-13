import "./Product.css";

function Product(props) {
  return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
        <p className="price">${props.price}</p>
        <p>{props.des}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
