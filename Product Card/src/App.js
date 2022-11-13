import "./App.css";
import Product from "./Product/Product";

function App() {
  return (
    <div className="container">
      <Product
        name="iPhone 14 Pro"
        price={999}
        img="/1.jpg"
        des="iOS 16 lets you customize your Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings.."
      ></Product>
      <Product
        name="iPhone 14"
        price={799}
        img="/iphone14.jpg"
        des=" Get our best battery life ever on iPhone 14 Plus. And awesome all-day
          battery life on iPhone 14.


          
          "
      ></Product>
      <Product
        name="iPhone 13"
        price={599}
        img="/iPhone13.jpg"
        des="The iPhone 13 display has rounded corners that follow a beautiful curved design, within a standard rectangle.
        "
      ></Product>
    </div>
  );
}

export default App;
