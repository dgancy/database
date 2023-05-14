import React from "react";
import { Button } from "react-bootstrap";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../App";
//import { useState } from "react";

export default function Log() {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="maxwidth">
      <br />
      <Button variant="success" onClick={handleClick}>
        Login
      </Button>
    </div>
  );
}
