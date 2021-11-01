import React, { useEffect, useState } from "react";
import SinglePakage from "../SinglePakage/SinglePakage";
import "./Pakages.css";

const Pakages = () => {
  const [pakages, setpakages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/pakages")
      .then((res) => res.json())
      .then((data) => setpakages(data));
  }, []);

  return (
    <div className="pkg-main">
      <div className="pakage-title text-center">
        <h6>Choose Your Package</h6>
        <h2>
          Select Your Best Package <br /> For Your Travel
        </h2>
      </div>
      <div className="pakages row container mx-auto g-3">
        {pakages.map((pakage) => (
          <SinglePakage key={pakage.key} pakage={pakage}></SinglePakage>
        ))}
      </div>
    </div>
  );
};

export default Pakages;
