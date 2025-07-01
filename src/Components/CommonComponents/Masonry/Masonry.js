import React from "react";
import "./masonry.css";
import { ServiceNameContainer } from "../ServiceNameContainer";
import MasonryHTHI from "../../../Assests/MasonryHTHI.png";
import { HalfTextHalfImg } from "../HalfTextHalfImg";
import tick from "../../../Assests/tick-icon 2.png";
import { Banner } from "../Banner";
import BlueFooter from "../BlueFooter/BlueFooter";
import { Sample_and_Uploads } from "../../CommonComponents/Sample_and_Uploads";
import { Helmet } from "react-helmet";
export const Masonry = () => {
  const text = (
    <>
      For top-tier masonry estimating services, look no further than World
      Estimating. With extensive experience spanning North America, Australia,
      and the Caribbean, we excel in providing precise and punctual estimates.
      Our adept masonry cost estimator is well-versed in Division 4,
      comprehensively covering brickwork, CMU walls, masonry types, and more.
      Using advanced software like AccuBid, Planswift, and Bluebeam, and
      adhering to esteemed organizations like AACE and AIQS, our dedicated team
      ensures quality and accuracy in every estimation.
    </>
  );
  const text2 = (
    <>
      For a quick quote based on your project scope, call us at +1-917-300-1079
      or email us at bluebookestimator@gmail.com
    </>
  );
  return (
    <div>
      <Helmet>
        <title>The BlueBook Estimators: Masonry Estimating Services</title>
        <meta
          name="description"
          content="Masonry Estimating Services: Accurate estimates, annotated plans, and 3D wall renderings delivered in 24-48 hrs at affordable rates."
        />
      </Helmet>
      <ServiceNameContainer text="Masonry Estimating Service" />
      <HalfTextHalfImg text={text} scr={MasonryHTHI} />
      <ServiceNameContainer text="Our Estimation is for masonry" />
      <div className="container">
        <p className="Paragrapg">
          We have extensive experience and practical expertise in the AEC
          industry, making us experts in providing precise and timely estimates
          for masonry work to a range of clients. These include general
          contractors, masonry contractors, masonry repair contractors, vendors,
          masons, developers, architects, designers, and home builders.
        </p>

        <h2 className="heading mt-5 mb-4">
          {" "}
          Our deliverables generally include
        </h2>
        <div
          className="mt-4 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="width50">
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              EXCEL spreadsheet
            </p>
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              3D wall renderings with many views
            </p>
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              Labor and material rates
            </p>
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              Man Hours
            </p>
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              Color-coded plans
            </p>
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              Detailed summary comprising material lay rate and unit costs.
              labor rates, crew size, equipment, overhead, profit percentage,
              etc.
            </p>
            <p>
              <img src={tick} width={20} height={20} className="m-1" />
              Review of addendums
            </p>
          </div>
        </div>
      </div>
      <ServiceNameContainer text="Why should you outsource your masonry estimate?" />
      <div className="container">
        <p className="Paragrapg">
          In today's fiercely competitive construction landscape, where narrow
          profit margins prevail, the key to gaining a competitive edge lies in
          precise and comprehensive estimates. Crafting a masonry estimate on
          your own presents challenges of accuracy, complexity, and time
          constraints. Achieving accurate masonry estimates necessitates
          in-depth knowledge of materials, labor, transportation, and software
          proficiency. Opting to outsource your estimates to a seasoned firm
          like World Estimating offers distinct advantages:
        </p>
        <p className="Paragrapg">
          1. Time Savings: Free up valuable time for strategic business
          development by entrusting your estimates to experts.
        </p>
        <p className="Paragrapg">
          2. Assured Accuracy: Rely on meticulously crafted estimates by skilled
          estimators, boosting your confidence in bid submissions.
        </p>
        <p className="Paragrapg">
          3. Increased Bidding Power: With accurate estimates, you can
          confidently bid on more projects, enhancing your win rate.
        </p>
        <p className="Paragrapg">
          4. Enhanced Efficiency: Improved estimating efficiency translates to
          higher profit margins for your projects.
        </p>
        <p className="Paragrapg">
          5. Cost Savings: Sidestep the expenses associated with software
          purchase and full-time estimators, preserving your budget.
        </p>
      </div>
      <Sample_and_Uploads />
      <BlueFooter />
    </div>
  );
};
