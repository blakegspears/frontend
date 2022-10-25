import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Catalog from "./pages/catalog";
import About from "./pages/about";
import Admin from "./pages/admin";
import Cart from "./pages/cart";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import WishList from "./components/wishList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./state/globalContext";

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/wish" element={<WishList />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </GlobalContext>
  );
}

export default App;
