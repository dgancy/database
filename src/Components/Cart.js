import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { functions } from "../App";
import { httpsCallable } from "firebase/functions";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [orders, setOrders] = useState([]);
  const priceRef = useRef(0);
  const navigate = useNavigate();
  const [orderCount, setOrderCount] = useState(false);
  const handleSubmit = () => {
    document.getElementById("myBtn").disabled = true;
    const request = httpsCallable(functions, "submitOrder");
    request(orders).then((data) => {
      console.log(data);
      localStorage.removeItem("cart");
      navigate("/");
    });
  };
  const ordersA = async () => {
    var dict = {};
    const array = JSON.parse(localStorage.getItem("cart"));
    console.log(array);
    if (array) {
      array.forEach((food) => {
        if (!dict[food.id]) {
          dict[food.id] = {
            count: 1,
            food: food,
          };
        } else dict[food.id].count++;
      });
      const arrayFromDictionary = Object.keys(dict).map((key) => dict[key]);
      setOrders(arrayFromDictionary);
      var price = 0;
      arrayFromDictionary.forEach((order) => {
        price += order.count * order.food.data.price;
      });
      priceRef.current = price;
      console.log(price);
      console.log(orders);
      setOrderCount(true);
    }
  };

  useEffect(() => {
    return () => ordersA();
  }, []);

  return (
    <div
      class="border border-success"
      style={{
        width: "50%",
        marginLeft: "25%",
        background: "rgb(200, 250, 250",
      }}
    >
      <h4>Your Order(s):</h4>

      {orders.map((order) => (
        <div class="form-group row justify-content-md-center">
          <label id="Item0" for="inputPassword">
            <pre class="col-sm-7 col-form-label mx-auto">
              {" "}
              {order.food.data.name} : {order.count} db
            </pre>
          </label>
        </div>
      ))}

      <div class="form-group row justify-content-md-center">
        <label for="inputPassword">
          <pre class="col-sm-7 col-form-label mx-auto">
            Paying: {priceRef.current} Ft
          </pre>
        </label>
      </div>
      {orderCount && (
        <Button variant="success" id="myBtn" onClick={() => handleSubmit()}>
          Submit
        </Button>
      )}
      {!orderCount && (
        <Button variant="success" disabled onClick={() => handleSubmit()}>
          Submit
        </Button>
      )}
    </div>
  );
}
