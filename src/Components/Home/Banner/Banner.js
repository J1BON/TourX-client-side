import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active slider1">
          <div className="banner-item">
            <h1>
              Amazing Tour <br />
              In Indoneshia
            </h1>
            <h5 className="my-lg-5">7 Days,8 Night Tour</h5>
            <button onClick="/book">Book Now</button>
          </div>
          ;
        </div>
        <div class="carousel-item slider2">
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
        <div class="carousel-item slider3">
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
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
