import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { functions } from "../App";
import { httpsCallable } from "firebase/functions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-bootstrap";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const request = httpsCallable(functions, "getUserOrders");
      request().then((data) => {
        setOrders(data.data);
        console.log(data);
      });
    };
    return ()=>fetchOrders();
  }, []);
  const calculateOrderPrice = (order) => {
    var price = 0;
    order.data.forEach((item) => {
      console.log(item);
      price += item.count * item.food.data.price;
    });
    return price;
  };

  return (
    <>
      <div id="accordion">
        {orders.map((order) => (
          <div class="card">
            <div
              class="card-header"
              data-bs-toggle="collapse"
              href={"#collapseOne"+order.timestamp._seconds}
            >
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    {new Date(order.timestamp._seconds * 1000).toDateString()}
                  </div>
                  <div class="col-md-4">{order.orderStatus}</div>
                  <div class="col-md-4">{calculateOrderPrice(order)} Ft</div>
                </div>
              </div>
            </div>
            <div
              id={"collapseOne"+order.timestamp._seconds}
              class="collapse show"
              data-bs-parent="#accordion"
            >
              <div class="card-body">
                {order.data.map((item) => (
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-4">{item.food.data.name}</div>
                      <div class="col-md-4">{item.count} db</div>
                      <div class="col-md-4">{item.food.data.price} Ft</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
