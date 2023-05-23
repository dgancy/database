import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { functions } from "../App";
import { httpsCallable } from "firebase/functions";

var OrdersArray = [];

export default function Foods() {
  const [foods, setFoods] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    OrdersArray = JSON.parse(localStorage.getItem("cart"));
    const fetchFood = async () => {
      const request = httpsCallable(functions, "getFoods");
      request().then((data) => {
        setFoods(data.data);
        console.log(data);
        setLoaded(true);
      });
    };
    return ()=>fetchFood();
  }, []);

  const addToCart = (food) => {
    OrdersArray.push(food);
    console.log("OA: " + OrdersArray);
    localStorage.setItem("cart", JSON.stringify(OrdersArray));
  };
  if (isLoaded) {
    return (
      <div>
        <div className="postwidth">
          {foods.map((food) => (
            <div class="card" style={{ width: "65%" }}>
              <div class="card-body">
                <h5 class="card-title">{food.data.name}</h5>
                <p class="card-text">{food.data.description}</p>
                <Button onClick={() => addToCart(food)} variant="success">
                  Add to cart{" "}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
