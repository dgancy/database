import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { functions } from "../App";
import { httpsCallable } from "firebase/functions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-bootstrap";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const needFetch = useRef(true);
  const isLoaded = useRef(false);
  const userIsAdmin = JSON.parse(localStorage.getItem("user")).role === 2;
  const fetchOrders = async () => {
    const request = httpsCallable(functions, "getUserOrders");
    request().then((data) => {
      setOrders(data.data);
      isLoaded.current = true;
    });
  };

  useEffect(() => {
    if (needFetch.current) fetchOrders();
    needFetch.current = false;
  }, []);
  const calculateOrderPrice = (order) => {
    var price = 0;
    order.data.forEach((item) => {
      console.log(item);
      price += item.count * item.food.data.price;
    });
    return price;
  };
  const acceptOrder = (order) => {
    const request = httpsCallable(functions, "acceptOrder");
    document.getElementById("myBtn").disabled = true;
    request({ orderId: order.id }).then((data) => {
      const updatedOrder = order;
      updatedOrder.data.orderStatus = "Elfogadva";
      setOrders((prevOrders) =>
        prevOrders.map((prevOrder) =>
          prevOrder.id === order.id ? updatedOrder : prevOrder
        )
      );
    });
  };
  if (isLoaded.current) {
    return (
      <>
        <div id="accordion">
          {orders.map((order) => (
            <div class="card">
              {console.log(order)}
              <div>
                <div class="col-md-14">
                  <div class="row">
                    <div class="col-md-4">
                      {new Date(
                        order.data.timestamp._seconds * 1000
                      ).toDateString()}
                    </div>
                    {!userIsAdmin && (
                      <div class="col-md-4">{order.data.orderStatus}</div>
                    )}
                    {userIsAdmin && (
                      <div class="col-md-4">
                        {order.data.orderStatus === "Függőben" && (
                          <Button id="myBtn" onClick={() => acceptOrder(order)}>
                            {order.data.orderStatus}
                          </Button>
                        )}
                        {order.data.orderStatus === "Elfogadva" &&
                          order.data.orderStatus}
                      </div>
                    )}
                    <div class="col-md-4">
                      {calculateOrderPrice(order.data)} Ft{" "}
                      <Button
                        class="card-header"
                        data-bs-toggle="collapse"
                        href={"#collapseOne" + order.id}
                      >
                        <b>+</b>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id={"collapseOne" + order.id}
                class="collapse show"
                data-bs-parent="#accordion"
              >
                <div class="card-body">
                  {order.data.data.map((item) => (
                    <div class="col-md-14">
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
  } else {
    return <>loading...</>;
  }
}
