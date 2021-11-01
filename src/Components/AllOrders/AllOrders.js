import React, { useEffect, useState } from "react";
import AllorderSingle from "../AllorderSingle/AllorderSingle";
import "./AllOrder.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://stark-forest-89249.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1 className="allorder-title">Manage All Orders</h1>
      <div className="manage-order row container mx-auto">
        {orders.map((order) => (
          <AllorderSingle key={order._id} order={order}></AllorderSingle>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
