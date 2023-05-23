import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  const username = localStorage.getItem("user");
  console.log("username: " + username);

  function AdData() {
    //navigate("/datadd");
  }

  return (
    <div>
      <div id="welcomeuser">Welcome, {username}</div>
      <div>
        <Button variant="success" onClick={AdData}>
          Add Data
        </Button>
      </div>
    </div>
  );
}
