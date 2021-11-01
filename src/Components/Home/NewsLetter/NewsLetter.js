import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="main">
      <div className="newsletter">
        <h1 className="text-center mb-5">
          Subscribe To Our Newsletter <br /> For Latest Update
        </h1>
        <p>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Type Your Email"
            />
            <button class="btn btn-submit" type="button" id="button-addon2">
              SUBSCRIBE
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
