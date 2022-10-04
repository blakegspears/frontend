import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Catalog from "./pages/catalog";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <NavBar />
      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
