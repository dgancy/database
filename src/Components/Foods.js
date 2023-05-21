import React from "react";
import Pancake from "./Images/imagepancake.jpg";
import Burger from "./Images/imageburger.jpg";
import Pizza from "./Images/imagepizza.jpg";
import Sushi from "./Images/imagesushi.jpg";
import { Button } from "react-bootstrap";

var OrdersArray = [];

function OrderPancake() {
  var count = document.getElementById("pancakequantity").value;
  OrdersArray.push("Pancake: " + count);
  console.log(OrdersArray);
}

function OrderPizza() {
  var count = document.getElementById("pizzaquantity").value;
  OrdersArray.push("Pizza: " + count);
  console.log(OrdersArray);
}

function OrderBurger() {
  var count = document.getElementById("burgerquantity").value;
  OrdersArray.push("Burger: " + count);
  console.log(OrdersArray);
}

function OrderSushi() {
  var count = document.getElementById("sushiquantity").value;
  OrdersArray.push("Sushi: " + count);
  console.log(OrdersArray);
}

export default function Foods() {
  return (
    <div>
      <div className="postwidth">
        <div class="card" style={{ width: "65%" }}>
          <img class="card-img-top" src={Pancake} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Pancake</h5>
            <p class="card-text">Some quick example text.</p>
            <input
              type="number"
              placeholder="0"
              className="postinput"
              id="pancakequantity"
            ></input>
            <Button onClick={OrderPancake} variant="success">
              Add to cart{" "}
            </Button>
          </div>
        </div>
        <br />
        <div class="card" style={{ width: "65%" }}>
          <img class="card-img-top" src={Burger} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Hamburger</h5>
            <p class="card-text">Some quick example text.</p>
            <input
              type="number"
              placeholder="0"
              className="postinput"
              id="burgerquantity"
            ></input>
            <Button onClick={OrderBurger} variant="success">
              Add to cart{" "}
            </Button>
          </div>
        </div>
        <br />
      </div>
      <div className="postwidthright">
        <div class="card" style={{ width: "65%" }}>
          <img class="card-img-top" src={Sushi} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Sushi</h5>
            <p class="card-text">Some quick example text.</p>
            <input
              type="number"
              placeholder="0"
              className="postinput"
              id="sushiquantity"
            ></input>
            <Button onClick={OrderSushi} variant="success">
              Add to cart{" "}
            </Button>
          </div>
        </div>
        <br />
        <div class="card" style={{ width: "65%" }}>
          <img class="card-img-top" src={Pizza} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Pizza</h5>
            <p class="card-text">Some quick example text.</p>
            <input
              type="number"
              placeholder="0"
              className="postinput"
              id="pizzaquantity"
            ></input>
            <Button onClick={OrderPizza} variant="success">
              Add to cart{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export {OrdersArray};