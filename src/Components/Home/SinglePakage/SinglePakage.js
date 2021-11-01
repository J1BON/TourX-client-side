import React from "react";
import { Link } from "react-router-dom";

const SinglePakage = ({ pakage }) => {
  const { title, img, price, rating, _id } = pakage;
  console.log(_id);
  return (
    <div className="row col-sm-12 col-md-6 col-lg-4 mx-auto">
      <div className="card mb-4">
        <div className="div">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="price d-flex justify-content-between">
              <h6>
                <span>
                  <i className="fas fa-dollar-sign"></i> {price}
                </span>
                /Per Person
              </h6>
              <p>
                <i className="far fa-calendar-alt"></i> 5 Days/6 night
              </p>
            </div>
            <h5 className="card-title">
              <i className="fas fa-map-marker-alt"></i>
              {title}
            </h5>
            <p className="rating">
              <i className="fas fa-star"></i>
              {rating}
            </p>
            <Link to={`/detail/${_id}`}>
              <button type="button" className="btn button text-white btn-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePakage;
