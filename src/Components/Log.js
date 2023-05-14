import React from "react";
import { Button } from "react-bootstrap";

export default function Log() {
  return (
    <div className="maxwidth">
      <br />
      <div class="card border-success mb-3">
        <h3 class="card-header">Login</h3>
        <div class="card-body text-success">
          <h5 class="card-title">Email: </h5>
          <input type="email" placeholder="Email"></input>
          <div class="card-body text-success">
            <h5 class="card-title">Password: </h5>
            <input type="password" placeholder="Password"></input>
          </div>
          <Button variant="success">Login</Button>
        </div>
      </div>
    </div>
  );
}
