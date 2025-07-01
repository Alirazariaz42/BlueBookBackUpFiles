import React from "react";
import "./ThermalProtection.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import ThermalProtectionHtHi from "../../Assests/ThermalConstructionHtHi.png";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import tick from "../../Assests/tick-icon 2.webp";
import { Helmet } from 'react-helmet';
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { Card } from "../CommonComponents/Card";
import cardimg1 from "../../Assests/CardIcon1.webp";
import cardimg2 from "../../Assests/CardIcon2.webp";
import cardimg3 from "../../Assests/CardIcon3.webp";
import cardimg4 from "../../Assests/CardIcon4.webp";
import cardimg5 from "../../Assests/CardIcon5.webp";
import cardimg6 from "../../Assests/CardIcon6.webp";
import cardimg7 from "../../Assests/CardIcon7.webp";
export const ThermalProtection = () => {
  const text = (
    <>
      Estimating the costs for Thermal and Moisture Protection involves
      determining the necessary expenses for materials, labor, and equipment
      needed to ensure proper insulation and moisture protection within a
      structure. This encompasses assessing the costs of materials including
      insulation, vapor barriers, flashing, waterproofing, and roof coatings,
      along with the expense of installation labor and equipment. The cost
      estimation must also consider any surplus or waste material, shipping
      costs, and any supplementary expenses such as permits or insurance.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Thermal & Moisture Protection Estimating Services
          </title>
          <meta
            name="description"
            content="Our cost estimators specialize in hands-on thermal and moisture protection estimating services for residential and commercial buildings."
          />
        </Helmet>
      <ServiceNameContainer text=" Thermal and Moisture Protection Estimation" />
      <HalfTextHalfImg text={text} scr={ThermalProtectionHtHi} />

      <div className="container">
        <h1 className="Factors">
          Factors that can affect the cost estimation for thermal and moisture
          protection include:
        </h1>
        <div className="row w-100 justify-content-center">
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Type of insulation"
                img={cardimg1}
                text="Estimates of Preliminary Work, Comparison Work, Conceptual Work, Budget Work, and Bid Work that are quick, efficient, and accurate"
              ></Card>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Roofing material"
                img={cardimg2}
                text="Analyses of the earthwork, cut and fill volumes, and estimates of feasibility costs"
              ></Card>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Waterproofing"
                img={cardimg3}
                text="Budgeting and cost control assistance in excavation estimating"
              ></Card>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Building size and complexity"
                img={cardimg4}
                text="Comparing bids, reviewing bids, and providing bid filing consultations"
              ></Card>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Accessibility"
                img={cardimg5}
                text="A successful project requires accurate cost projections during the design phase."
              ></Card>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Climate and location"
                img={cardimg6}
                text="Ensure smooth project adjustments and cost control with our streamlined change order management process."
              ></Card>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card
                title="Contractor experience and reputation"
                img={cardimg7}
                text="Optimize project value through our value engineering expertise, enhancing efficiency and cost-effectiveness while maintaining quality."
              ></Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ServiceNameContainer text=" Thermal Insulation Estimating" />
        <p className="paragraph">
          Each division is described and takeoff in detail by our project
          estimators. Each roofing trade of work from the online roof repair
          estimate, tin roof, steel roof, garage roof, metal roof, slate roof,
          shingle roof, and flat roof estimates are accurately and precisely
          digitized by takeoff software and quantified in an EXCEL sheet. A
          large majority of homeowners reach out to us for their house roof, for
          which drawings or specifications make up the work for us and with our
          experience and past recent portfolio of projects, handle each project
          with a handful of expertise and deliver the projected cost to build a
          house roof in an hours’ time
        </p>
  
        <ServiceNameContainer text=" Thermal & Moisture Protection Takeoffs" />
            <div>
            <div className="row w-100 justify-content-center points">
          <div
            className="col-lg-4 col-md-6 col-12 mt-4 "
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                fire retardant cable sprays takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                damproofing takeoffs

              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                waterproofing takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                chemical grouting takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                traffic coatings takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                fiber insulation takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                plastic insulation takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                cellulose insulation takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                reflective insulation takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                cladding takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                roof and deck installation takeoffs
              </p>
             
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-12  mt-4 "
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            <div>

              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                EIFS( Exterior Insulation and Finish Systems) takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Weather Barriers takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Vapor Resistive Barriers takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Vapor Permeable Barriers takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Steep Slope Roofing takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Shingles (Asphalt, Metal, Slate) takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Siding Panels takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Metal Siding takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Vinyl Siding takeoffs
              </p>
            
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-12  mt-4"
            style={{
              display: "flex",

              justifyContent: "center",
            }}
          >
            <div>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                membrane roofing takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                bituminuous roofing takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                flashings takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                coping takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                fascias takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                gutters and downspouts takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                roof expansion joints takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                roof curbs takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                ridge vents takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                pipe flashing system takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Wood Siding and Shingles takeoffs
              </p>
            </div>
          </div>
        </div>
            </div>

      </div>
      <Sample_and_Uploads/>
      <BlueFooter />
    </div>
  );
};
