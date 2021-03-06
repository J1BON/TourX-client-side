import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p className="text-justify mt-4">
                Welcome to TourX. We provide best toursium service in town. For
                any kind of tour related service visir our hospital. Here we
                have professional guide and quick eqipment for tour.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Contact Us</h6>
              <ul className="footer-links">
                <li>+01852-1265122</li>
                <li>+01852-1265122</li>
                <li>support@example.com</li>
                <li>2752 Willison Street</li>
                <li>Eagan, United State</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>SUPPORT</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About US</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>Contibute</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by Jiban Ahammed
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
