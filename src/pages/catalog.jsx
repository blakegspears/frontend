import "./catalog.css";
import Product from "./product";


function Catalog() {
    return (
        <div className="catalog">
            <div>
                <h1>Check our amazing catalog!</h1>
            
            <Product />
            <Product />
            <Product />                            
            </div>

        
        </div>


    )
}

export default Catalog;