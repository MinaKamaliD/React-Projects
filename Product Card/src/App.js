import "./App.css";
import Product from "./Product/Product";

function App() {
  const allProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 999,
      img: "/iPhone14 Pro.jpg",
      des: "iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings..",
    },
    {
      id: 2,
      name: "iPhone 14",
      price: 799,
      img: "/iPhone14.jpg",
      des: "Get our best battery life ever on iPhone 14 Plus. And awesome all-day battery life on iPhone 14.",
    },
    {
      id: 3,
      name: "iPhone 13",
      price: 599,
      img: "/iPhone13.jpg",
      des: "The iPhone 13 display has rounded corners that follow a beautiful curved design, within a standard rectangle.",
    },
  ];

  return (
    <div className="container">
      <Product {...allProducts[0]}></Product>

      <Product {...allProducts[1]}></Product>

      <Product {...allProducts[2]}></Product>
    </div>
  );
}

export default App;
