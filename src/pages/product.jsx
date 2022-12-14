import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "../state/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(StoreContext).addToCart;

  const handleQuantityChange = (qty) => {
    console.log("QuantityPicker changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return "$" + total.toFixed("2");
  };

  const handleAdd = () => {
    let pForCart = { ...props.data, quantity: quantity };
    addToCart(pForCart);
    console.log(1, addToCart);
  };
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">{getTotal()}</label>
        <label className="price">Price: ${props.data.price.toFixed("2")}</label>
      </div>
      <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />

        <button onClick={handleAdd} className="btn btn-sm btn-success">
          Add
        </button>
      </div>
    </div>
  );
};
export default Product;
