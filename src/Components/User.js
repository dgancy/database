import React from "react";
import { Button } from "react-bootstrap";
import { user } from "./Log";

export default function User() {
  return (
    <div>
      <div id="welcomeuser">Welcome, {user}</div>
      <Button variant="success">Sign Out</Button>
    </div>
  );
}
