import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active slider1">
          <div className="banner-item">
            <h1>
              Amazing Tour <br />
              In Malayshia
            </h1>
            <h5 className="my-lg-5">7 Days,8 Night Tour</h5>
            <button onClick="/book">Book Now</button>
          </div>
          ;
        </div>
        <div className="carousel-item slider2">
          <div className="banner-item">
            <h1>
              Amazing Tour <br />
              In Indoneshia
            </h1>
            <h5 className="my-lg-5">7 Days,8 Night Tour</h5>
            <button as={Link} to="/book">
              Book Now
            </button>
          </div>
          ;
        </div>
        <div className="carousel-item slider3">
          <div className="banner-item">
            <h1>
              Amazing Tour <br />
              In Norway
            </h1>
            <h5 className="my-lg-5">7 Days,8 Night Tour</h5>
            <button as={Link} to="/book">
              Book Now
            </button>
          </div>
          ;
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
