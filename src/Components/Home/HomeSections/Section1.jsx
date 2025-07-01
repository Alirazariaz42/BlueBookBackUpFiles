import { useState } from "react";
import { Images } from "../../../Assests/Constant";
import { BlueButton } from "../../CommonComponents";
import ".././Home.css";
import { useNavigate } from "react-router-dom";
import ourvission from "../../../Assests/ourvission.webp";

const Section1 = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="pos_relative">
        <div
          className="row w-100 justify-content-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-5">
            <h1 className="ourVission">Our Vision</h1>
            <h1 className="QualittyWork">Quality Work With Quick Delivery</h1>
          </div>

          <div
            className="col-7"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={ourvission}
                alt="homeImage1"
                className="sec1ImageConatiner"
              />
            </div>
          </div>
        </div>

        <div className="pos_absolute">
          <h2 className="mission">Our Vision</h2>
          <p>
            Our vision is to build and maintain a successful business
            relationship which includes providing uncompromising quality,
            reliable accuracy, and fast turnaround time to General Contractors,
            Home Builders, Subcontractors, Architects, Developers, and Home
            Owners
          </p>
          <h2 className="mission">Our Mission</h2>
          <p>
            We are driven by the goal of establishing and nurturing enduring,
            fruitful business connections with our clients. We achieve this by
            ensuring their complete contentment in terms of Turnaround time,
            Price, and above all, consistent Accuracy. If you're interested in
            discovering more about our services, industry background, and
            examples of our work, please don't hesitate to inquire.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section1;
