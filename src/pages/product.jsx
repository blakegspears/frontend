import "./product.css";
import QuantityPicker from "../components/quantityPicker";

const Product = (props) => {
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>

      <div className="prices">
        <label className="total">Total</label>
        <label className="price">Price</label>
      </div>
      <div className="controls">
        <QuantityPicker />

        <button className="btn btn-sm btn-success">Add</button>
      </div>
    </div>
  );
};
export default Product;
