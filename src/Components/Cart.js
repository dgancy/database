import React from "react";
import { OrdersArray } from "./Foods";

export default function Cart() {
  console.log("Cart: " + OrdersArray);
  for (let i = 0; i < OrdersArray.length; i++) {
    const myArray = OrdersArray[i].split(",");
    console.log(i + " : " + myArray);
    //const myArrayOut = myArray.split(" ");
  }
  return <div>Cart</div>;
}
