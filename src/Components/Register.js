import React from "react";
import { Button } from "react-bootstrap";

export default function Register() {
  return (
    <div className="maxwidth">
      <br />
      <div class="card border-success mb-3">
        <h3 class="card-header">Registration</h3>
        <div class="card-body text-success">
          <h5 class="card-title">Email: </h5>
          <input type="email" placeholder="Email"></input>
          <div class="card-body text-success">
            <h5 class="card-title">Name: </h5>
            <input type="text" placeholder="Name"></input>
          </div>
          <div class="card-body text-success">
            <h5 class="card-title">Password: </h5>
            <input type="password" placeholder="Password"></input>
          </div>
          <div class="card-body text-success">
            <h5 class="card-title">Password Again: </h5>
            <input type="password" placeholder="Password"></input>
          </div>
          <Button variant="success">Registration</Button>
        </div>
      </div>
    </div>
  );
}
