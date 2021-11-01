import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyorderCard from "./myOrderCard/MyorderCard";

const Myorder = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user.email]);

  console.log(order);

  // order dis

  //   const { name, email, detailId, address, phone } = order;

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/pakages/${detailId}`)
  //       .then((res) => res.json)
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <div className="row container mx-auto">
      {order.map((order) => (
        <MyorderCard key={order._id} order={order}></MyorderCard>
      ))}
    </div>
  );
};

export default Myorder;
