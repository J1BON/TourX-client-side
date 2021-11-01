import React, { useEffect, useState } from "react";

const AllorderSingle = ({ order }) => {
  const { _id, detailId, name, address, phone, email } = order;

  const [ordered, setOrdereds] = useState([]);
  useEffect(() => {
    fetch(`https://stark-forest-89249.herokuapp.com/pakages/${detailId}`)
      .then((res) => res.json())
      .then((data) => setOrdereds(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://stark-forest-89249.herokuapp.com/orders/${id}`;
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
          <img src={ordered.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="price d-flex justify-content-between">
              <h6>
                <span>
                  <i className="fas fa-dollar-sign"></i> {ordered.price}
                </span>
                /Per Person
              </h6>
              <p>
                <i className="far fa-calendar-alt"></i> 5 Days/6 night
              </p>
            </div>
            <h5 className="card-title">
              <i className="fas fa-map-marker-alt"></i>
              {ordered.title}
            </h5>
            <p className="rating">
              <i className="fas fa-star"></i>
              {ordered.rating}
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

export default AllorderSingle;
