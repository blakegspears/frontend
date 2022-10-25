import { useState } from "react";
import "./admin.css";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const handleProductChange = (e) => {
    const name = e.target.name;
    const text = e.target.value;

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  };

  const saveProduct = () => {
    let copy = { ...product };
    copy.price = parseFloat(copy.price);

    let productList = [...allProducts];
    productList.push(copy);
    setAllProducts(productList);

    console.log(productList);
  };

  const handleCouponChange = (e) => {
    const name = e.target.name;
    const text = e.target.value;

    let copy = { ...coupon };
    copy[name] = text;
    setCoupon(copy);
  };

  const saveCoupon = () => {
    let copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);

    let couponList = [...allCoupons];
    couponList.push(copy);
    setAllCoupons(couponList);

    console.log(couponList);
  };
  return (
    <div className="admin">
      <h1>Admin Page</h1>

      <div className="parent">
        <section className="sec-products">
          <h3>Products</h3>

          <div className="form">
            <div className="my-control">
              <label>Title</label>
              <input name="title" onChange={handleProductChange} type="text" />
            </div>

            <div className="my-control">
              <label>Price</label>
              <input
                name="price"
                onChange={handleProductChange}
                type="number"
              />
            </div>

            <div className="my-control">
              <label>Image</label>
              <input name="image" onChange={handleProductChange} type="text" />
            </div>

            <div className="my-control">
              <label>Category</label>
              <input
                name="category"
                onChange={handleProductChange}
                type="text"
              />
            </div>

            <div className="my-control">
              <button onClick={saveProduct} className="btn btn-dark">
                Save
              </button>
            </div>
          </div>

          <ul>
            {allProducts.map((p) => (
              <li key={p.title}>
                {p.image} - {p.title} - ${p.price} - {p.category}
              </li>
            ))}
          </ul>
        </section>

        <section className="sec-discount">
          <h3>Discounts</h3>

          <div className="form">
            <div className="my-control">
              <label>Code</label>
              <input name="code" onChange={handleCouponChange} type="text" />
            </div>

            <div className="my-control">
              <label>Discounts</label>
              <input
                name="discount"
                onChange={handleCouponChange}
                type="number"
              />
            </div>

            <div className="my-control">
              <button onClick={saveCoupon} className="btn btn-dark">
                Save
              </button>
            </div>
          </div>

          <ul>
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admin;
