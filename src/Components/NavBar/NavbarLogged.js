import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import Log from "../Log";

export default function NavbarLogged() {

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Button className="btn" variant="success" as={Link} to={"/"}>
          Home
        </Button>
        <Button variant="success" as={Link} to={"/login"}>
          Login
        </Button>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Log />} />
      </Routes>
    </Router>
  );
}
