import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { functions } from "../App";
import { httpsCallable } from "firebase/functions";

export default function Foods() {
  const [foods, setFoods] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const needFetch = useRef(true);

  const fetchFood = async () => {
    const request = httpsCallable(functions, "getFoods");
    request().then((data) => {
      setFoods(data.data);
      setLoaded(true);
    });
  };
  let ordersArray = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    if (needFetch.current) fetchFood();
    needFetch.current = false;
  }, []);

  const addToCart = (food) => {
    if (!ordersArray) {
      ordersArray = [];
    }
    ordersArray.push(food);
    localStorage.setItem("cart", JSON.stringify(ordersArray));
  };
  if (isLoaded) {
    return (
      <div>
        <br />
        <div className="postwidth">
          {foods.map((food) => (
            <div class="card" style={{ width: "100%" }}>
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
