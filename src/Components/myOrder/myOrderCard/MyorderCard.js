import React, { useEffect, useState } from "react";

const MyorderCard = ({ order }) => {
  const { name, detailId, email, address, phone, _id } = order;
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/pakages/${detailId}`)
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  // Delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          //   const reaming = orders.filer((order) => order._id !== id);
          //   setOrdereds(reaming);
          alert("Deleted Successfully");
        }
      });
  };
  return (
    <div className=" col-sm -12 col-md-6 col-lg-4">
      <div className="card mb-4 ">
        <div className="div">
          <img src={card.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="price d-flex justify-content-between">
              <h6>
                <span>
                  <i className="fas fa-dollar-sign"></i> {card.price}
                </span>
                /Per Person
              </h6>
              <p>
                <i className="far fa-calendar-alt"></i> 5 Days/6 night
              </p>
            </div>
            <h5 className="card-title">
              <i className="fas fa-map-marker-alt"></i>
              {card.title}
            </h5>
            <p className="rating">
              <i className="fas fa-star"></i>
              {card.rating}
            </p>
            <hr />
            <p>Order-Receipt :</p>
            <p className="Name">Name: {name}</p>
            <p className="Name">Address: {address}</p>
            <p className="Name">Email: {email}</p>
            <p className="Name">Phone: {phone}</p>
            <div
              className="btn btn-outline-warning"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyorderCard;
