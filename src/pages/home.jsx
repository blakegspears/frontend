import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="banner">
      <div className="text">
        <h1>Home Page</h1>
        <img src="./images/home_page.jpg" alt="" />
      </div>

      <Link className="btn btn-dark-lg">Catalog</Link>
    </div>
  );
};

export default Home;
