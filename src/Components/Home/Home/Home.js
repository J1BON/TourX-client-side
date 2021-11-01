import React from "react";
import Banner from "../Banner/Banner";
import Pakages from "../Pakages/Pakages";
import ClientReview from "../ClientReview/ClientReview";
import NewsLetter from "../NewsLetter/NewsLetter";
import Description from "../Description/Description";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Pakages></Pakages>
      <Description></Description>
      <ClientReview></ClientReview>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
