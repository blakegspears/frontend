import "./productInCart.css";

const ProductInCart = (props) => {
    return <div className="prod-cart">



        <div className="info">
            <h5>{props.data.title}</h5>
            <p>{props.data.category}</p>
        </div>

        <img src={"/images/" + props.data.image} alt="" />

        <label>{props.data.price}</label>

        <label>{props.data.quantity}</label>

        <label>{getTotal()}</label>

        <button className="btn btn-sm btn-danger">Remove</button>
    </div>
};

export default ProductInCart;