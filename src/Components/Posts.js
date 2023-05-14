import React from "react";
import { Button } from "react-bootstrap";

function Posting() {}

export default function Posts() {
  return (
    <div className="postwidth">
      <br />
      <div class="card border-success mb-3">
        <h3 class="card-header">Create New Post</h3>
        <div class="card-body text-success">
          <h5 class="card-title">Post: </h5>
          <input type="text" placeholder="Column" id="postcolummn"></input>
          <div class="card-body text-success">
            <h5 class="card-title">Post text: </h5>
            <textarea
              className="postinput"
              type="text"
              placeholder="Text..."
            ></textarea>
          </div>
          <Button variant="success" onClick={Posting}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
