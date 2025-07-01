import React from "react";
import "./Finishes.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import FinishesHtHi from "../../Assests/finishesHTHI.webp";
import FinishesHtHi2 from "../../Assests/FinishesHTHI2.webp";
import FinishesHtHi3 from "../../Assests/FinishesHTHI3.webp";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';
import { Banner } from "../CommonComponents/Banner";
import BlueFooter from "../CommonComponents/BlueFooter/BlueFooter";

export const Finishes = () => {
  const text = (
    <>
      Estimations of interior and exterior finishes play a crucial role in the
      building construction process. Assessments for paint, stucco, plaster, and
      specialized coatings are essential for contractors to secure bids and
      provide accurate quotes to clients. Typically, they require bid and
      material takeoffs to facilitate material ordering and procurement.
    </>
  );
  const text2 = (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul>
          <li>Material Takeoffs</li>
          <li>Flooring Estimates</li>
          <li>Painting Estimates</li>
          <li>Ceiling Estimates</li>
          <li>Drywall Estimates</li>
          <li>Stucco Estimates</li>
          <li>Bid Estimate</li>
          <li>Bid Reviews</li>
          <li>Budget Estimate </li>
          <li>Change Order Estimate </li>
          <li>Project Lead Generation </li>
          <li>Subcontractor Marketing </li>
        </ul>
      </div>
    </>
  );
  const text3 = (
    <>
      At The Bluebook Estimators, our mission is to offer exceptional material
      takeoffs and price assessments for flooring contractors. flooring
      installation businesses, carpet mills, architects, designers, and
      manufacturers. Our precise flooring estimation solutions are customized to
      reduce waste while considering all patterns, inlays, and design features.
    </>
  );
  const text4 = (
    <>
      For a quick quote based on your project scope, call us at +1-917-300-1079
      or email us at bluebookestimator@gmail.com
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Finishes Estimating Services: Interior & Exterior Finishes
          </title>
          <meta
            name="description"
            content="The BlueBook Estimators provides cost estimating services for residential and commercial contractors, covering interior and exterior finishes."
          />
        </Helmet>
      <ServiceNameContainer text="Interior and Exterior Finishes" />
      <HalfTextHalfImg text={text} scr={FinishesHtHi} />
      <ServiceNameContainer text="The Range of Finishes Estimating Service" />
      <HalfTextHalfImg text={text2} scr={FinishesHtHi2} />
      <ServiceNameContainer text="Flooring Estimating Services" />
      <HalfTextHalfImg text={text3} scr={FinishesHtHi3} />
      <div className="container">
        <h4 style={{ fontWeight: "700" }}>
          Our flooring estimate deliverables include:
        </h4>
        <ul className="paragraph mb-4">
          <li>Digital flooring takeoff file </li>
          <li>Material spreadsheet</li>
          <li>Color-coded plans</li>
          <li>Seaming diagrams</li>
          <li>
            Takeoff summary including total square feet, seaming & welding
            linear feet, wall base, stair information, etc
          </li>
          <li>Review of bid documents and addendums</li>
        </ul>
      </div>
      <div>
      <Sample_and_Uploads/>
      </div>
      <BlueFooter />
    </div>
  );
};
