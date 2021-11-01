import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./Detail.css";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Detail = () => {
  const [pakage, setPakage] = useState([]);
  const { detailId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/pakages/${detailId}`)
      .then((res) => res.json())
      .then((data) => setPakage(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Package booked successfully");
        reset();
      }
    });
  };
  const { user } = useAuth();

  return (
    <div className="detail-full">
      <div className="detail-main row container mx-auto g-3">
        <div className="detail-area col-sm-12 col-md-12 col-lg-6  p-lg-5 ">
          <div className="card mb-4">
            <div className="div">
              <img src={pakage.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="price d-flex justify-content-between">
                  <h6>
                    <span>
                      <i className="fas fa-dollar-sign"></i> {pakage.price}
                    </span>
                    /Per Person
                  </h6>
                  <p>
                    <i className="far fa-calendar-alt"></i> 5 Days/6 night
                  </p>
                </div>
                <h5 className="card-title">
                  <i className="fas fa-map-marker-alt"></i>
                  {pakage.title}
                </h5>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  {pakage.rating}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="from-area col-sm-12 col-md-12 col-lg-6  p-lg-5 ">
          <h1 className="form-title">
            Please fill the form to book your package
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Full name"
              value={user.displayName}
            />
            <input
              {...register("address", { required: true })}
              placeholder="Full address"
            />
            <input
              type="hidden"
              {...register("detailId")}
              value={detailId}
              readonly
              className="detail-id"
            />
            <input
              type="email"
              {...register("email")}
              placeholder="Your email"
              value={user.email}
            />
            <input
              type="number"
              {...register("phone", { required: true })}
              placeholder="Your phone"
            />
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;
