import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import Log from "../Log";

export default function NavbarLogout() {

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
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
