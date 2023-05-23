import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import Foods from "./Foods";
import { getAuth, signInWithPopup } from "firebase/auth";
import {auth, provider, functions} from "../App";
import { httpsCallable } from "firebase/functions";

export default function NavbarLogout() {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      const request = httpsCallable(functions, "getUser");
      var user = {
        displayName: data.user.displayName,
        email: data.user.email,
        uid: data.user.uid,
      };
      request()
        .then((userResponse) => {
          user.role = userResponse.data.role;
          console.log(userResponse.data.role);
        })
        .catch((error) => {
          user.role = 1;
        });
      localStorage.setItem('user', JSON.stringify(user));
      window.location.replace("/");
      window.location.reload();
      console.log("test");
    });
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Button className="btn" variant="success" as={Link} to={"/"}>
          Foods
        </Button>
        <Button variant="success" onClick={()=>handleClick()}>
          Login
        </Button>
      </Navbar>
      <Routes>
        <Route path="/" element={<Foods />} />
      </Routes>
    </Router>
  );
}
