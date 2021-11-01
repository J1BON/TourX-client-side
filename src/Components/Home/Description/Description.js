import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="detail-body">
      <div className="container">
        <div className="detail-title text-center">
          <h4>Why TourX</h4>
          <h1>
            Why You Are Travel With
            <br />
            TourX
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-sm-12 col-md-6 col-lg-3 detail-item">
            <p>
              <i className="fas fa-male"></i>
            </p>
            <p>2000+ Our worldwide guide</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 detail-item">
            <p>
              <i className="far fa-handshake"></i>
            </p>
            <p>100% trusted travel agency</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 detail-item">
            <p>
              <i className="fas fa-medal"></i>
            </p>
            <p>10+ year of travel experience</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 detail-item">
            <p>
              <i className="far fa-smile-beam"></i>
            </p>
            <p>90% of our traveller happy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
