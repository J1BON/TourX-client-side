import React from "react";
import "./ClientReview.css";

const ClientReview = () => {
  return (
    <div>
      <div className="review-title text-center">
        <h6>Our Traveller Say</h6>
        <h1>
          What Our Traveller Say <br /> About Us
        </h1>
      </div>
      <div className="review">
        <div class="testimonials-section">
          <input
            type="radio"
            name="slider"
            title="slide-1"
            checked="checked"
            class="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide-2"
            class="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide-3"
            class="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide-4"
            class="slider__nav"
          />
          <input
            type="radio"
            name="slider"
            title="slide-5"
            class="slider__nav"
          />
          <div class="slider__inner">
            <div class="slider__contents">
              <quote>&rdquo;</quote>
              <p class="slider__txt">
                We love you guys. It's easy to order, we get shipments quick and
                my rep solves tough problems the right way. We get answers that
                work.
              </p>
              <h2 class="slider__caption">Rhonda | NylonCraft</h2>
            </div>
            <div class="slider__contents">
              <quote>&rdquo;</quote>
              <p class="slider__txt">
                You all bend over backwards to get it done. Inside sales and the
                Account Managers are great! It's your service...you all know
                that it's not just about taking orders it's about service. Why
                do we choose you guys - your people, your prices, you're quick
                and you have a ton of technical knowledge.
              </p>
              <h2 class="slider__caption">Jared | Rexam</h2>
            </div>
            <div class="slider__contents">
              <quote>&rdquo;</quote>
              <p class="slider__txt">
                It's the long-term relationship we have with Proheat that keeps
                me calling you guys. I trust you, you're quick, and everybody
                I've ever spoken to there are all great people. Our CEO, Bill,
                talks about building relationships. That's exactly what Proheat
                does, and I couldn't be happier.
              </p>
              <h2 class="slider__caption">Chris | C&M Fine Pack</h2>
            </div>
            <div class="slider__contents">
              <quote>&rdquo;</quote>
              <p class="slider__txt">
                You answer my questions, always takes care of problems, and I
                never have a hassle.
              </p>
              <h2 class="slider__caption">Rex | LNP Engineering Plastics</h2>
            </div>
            <div class="slider__contents">
              <quote>&rdquo;</quote>
              <p class="slider__txt">
                Proheat's staff are all so friendly and everybody goes above and
                beyond. Everyone is courteous, everything is quick and you get
                us what we need. I have to shop around for everything and we
                ALWAYS come back to Proheat.
              </p>
              <h2 class="slider__caption">Darlene | Russel Stover</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
