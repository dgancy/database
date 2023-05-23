import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import User from "./User";
import Foods from "./Foods";
import Cart from "./Cart";
import Orders from "./Orders";
import ShopCart from "./Images/shoppingcart.png";

export default function NavbarLogged() {
  function Logout() {
    localStorage.clear();
    window.location.reload();
    console.log("test1");
  }

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Button className="btn" variant="success" as={Link} to={"/foods"}>
          Foods
        </Button>
        <Button className="btn" variant="success" as={Link} to={"/user"}>
          User
        </Button>
        <Button variant="success" onClick={()=>Logout()}>
          SignOut
        </Button>
        <Link to={"/cart"}>
          <img src={ShopCart}></img>
        </Link>
      </Navbar>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
}
