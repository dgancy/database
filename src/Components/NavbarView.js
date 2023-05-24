import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import Cash from "./Images/dollar.png";
import ShopCart from "./Images/shoppingcart.png";
import { getAuth, signInWithPopup } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { auth, provider, functions } from "../App";

export default function NavbarView() {
  const [userIsLogged, setUserLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setUserLogin(localStorage.getItem("user") != null)
  }, [])

  const Logout = () => {
    if (!localStorage.getItem("user")) {
      return;
    }
    setUserLogin(false)
    localStorage.clear();
    navigate("/")
  }

  const Login = () => {
    if (localStorage.getItem("user")) {
      return;
    }
    signInWithPopup(auth, provider).then(async (data) => {
      setUserLogin(true)
      navigate("/")
      const request = httpsCallable(functions, "getUser");
      var user = {
        displayName: data.user.displayName,
        email: data.user.email,
        uid: data.user.uid,
      };
      await request()
        .then((userResponse) => {
          user.role = userResponse.data.role;
        })
        .catch((error) => {
          user.role = 1;
        });
      localStorage.setItem('user', JSON.stringify(user));
    });
  };


  return (
      <Navbar bg="dark" variant="dark">
        <Button className="btn" variant="success" as={Link} to={"/"}>
          Foods
        </Button>
        {userIsLogged && (<> <Button variant="success" onClick={() => Logout()}>
          SignOut
        </Button>
          <Link to={"/cart"}>
            <img style={{marginLeft:"5px"}} src={ShopCart}></img>
          </Link>
          <Link to={"/orders"}>
            <img style={{marginLeft:"10px"}} src={Cash}></img>
          </Link> </>
        )
        }

        {!userIsLogged &&
          <Button variant="success" onClick={() => Login()}>
            Login
          </Button>
        }
      </Navbar>
  );
}
