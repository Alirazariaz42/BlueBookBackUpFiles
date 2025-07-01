import React from "react";
import "./ConcreteEstimation.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import ConcretePic from "../../Assests/ConcretePic.webp";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import residentalpics from "../../Assests/residential-concrete-cost-estimator.webp";
import TypesOfConcrete from "../../Assests/typesOf Concret.webp";
import tick from "../../Assests/tick-icon 2.webp";
import BlueFooter from "../CommonComponents/BlueFooter/BlueFooter";
import { Banner } from "../CommonComponents/Banner";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";
import { Helmet } from "react-helmet";
export const ConcreteEstimation = () => {
  const text = (
    <>
      Concrete Estimation service is used to support builders, contractors, and
      homeowners in assessing the expenses of their concrete endeavors. We
      provide concrete estimation services. All labor and material expenses
      related to completing construction are considered in our comprehensive
      concrete estimate process. Our group of concrete cost estimators stays
      current on prevailing market rates and trends. They deliver accurate and
      reliable concrete cost estimates by utilizing state-of-the-art
      technologies and methodologies. Typically, contractors engaged in the
      tasks of sidewalks, driveways, and paving must work onsite to finish the
      fieldwork and find it challenging to estimate precisely for bidding
      proposals. We assist them with our exact estimate report for concrete
      tasks.
    </>
  );
  return (
    <div>
      <Helmet>
        <title>Concrete Takeoff: Concrete Estimating Services</title>
        <meta
          name="description"
          content="Precision concrete estimating services in 24-48 hours at reasonable rates. Get accurate concrete estimating & takeoff services with The BlueBook Estimators."
        />
      </Helmet>
      <ServiceNameContainer text="Concrete Estimation" />
      <HalfTextHalfImg text={text} scr={ConcretePic} />
      <ServiceSubheadingContainer text="We Provide Concrete Estimation Service" />
      <div className="container">
        <img src={residentalpics} className="ImgStyle" />

        <div className="row w-100 m-0 mt-3 justify-content-center">
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Sidewalks
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Driveways
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Lintel Block
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Patios
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Backyard
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Retaining Walls
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Sidewalks
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Basements
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Decks
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Parking Lots
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Square Pilasters
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Wire Mesh
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Paving
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Stirrups
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Knockouts
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Tie Beams
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Foundation Concrete
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Curbs
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Shear Walls
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Dowels
              </p>
            </div>
          </div>
        </div>

        <ServiceSubheadingContainer text="Type of Concrete We Use" />
        <img src={TypesOfConcrete} className="ImgStyle" />
        <div className="row w-100 m-0 mt-3 justify-content-center">
          <div
            className=" col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Reinforced Concrete
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Lightweight Concrete
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                High-Strength Concrete
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                Precast Concrete
              </p>
              <p className="Paragrapg">
                <img src={tick} width={20} height={20} className="m-1" />
                High-performance Concrete
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* <p className="CSIStyling">
            {" "}
            We Offer Quantity Takeoff Services For All CSI Divisions Please
            Checkout <button>CSI Divisions</button>
          </p> */}
          <Sample_and_Uploads />{" "}
        </div>
      </div>
      <BlueFooter></BlueFooter>
    </div>
  );
};
