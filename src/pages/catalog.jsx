import { useEffect, useState } from "react";
import "./catalog.css";
import Product from "./product";
import Dataservice from "../services/dataService";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  // useeffect to do something when the component is loaded
  useEffect(() => {
    let service = new Dataservice();
    let result = service.getCatalog();
    setProducts(result);
  }, []);

  return (
    <div className="catalog">
      <h1>Check our amazing catalog!</h1>

      <div className="list-container">
        {products.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Catalog;
