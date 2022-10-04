import "./product.css";
import QuantityPicker from "../components/quantityPicker";
import { useState } from 'react';

const Product = () => {
    const [price, setPrice] = useState(29.99);

    const increase = () => {
        let value = price + 29.99
        setPrice(value);
    };

    const decrease = () => {
        if (price ===29.99) {
            return;}
        let value = price - 29.99;
        setPrice(value);
    };
        return (
            <div className="product">
                <h1>Product</h1>
                <img src="https://picsum.photos/200" alt=""/>
            <div class="q-Picker">
                <QuantityPicker/>
                <form className="d-flex" role="search">
                    <input className="form-control me-2"/>
                </form>
                </div>
            </div>
        );
}
    export default Product;