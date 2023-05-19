import React from "react";
import { Button } from "react-bootstrap";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../App";

var user;

export default function Log() {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      user = data.user.displayName;
      console.log("username: " + user);
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
export { user };
