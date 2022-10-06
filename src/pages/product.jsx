import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (qty) => {
    console.log("QuantityPicker changed", qty);
    setQuantity(qty);
  };

  const getTotal = () => {
    const total = quantity * props.data.price;
    return total.toFixed("2");
  };
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">Total</label> {getTotal()}
        <label className="price">Price: ${props.data.price.toFixed("2")}</label>
      </div>
      <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />

        <button className="btn btn-sm btn-success">Add</button>
      </div>
    </div>
  );
};
export default Product;
