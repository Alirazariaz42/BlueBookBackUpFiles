import React from "react";
import "./MatelEstimations.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import MetalsHTHI from "../../Assests/MetalsHTHI.webp";
import MetalsHTHI2 from "../../Assests/MetalsHTHI2.webp";
import { Banner } from "../CommonComponents/Banner";
import BlueFooter from "../CommonComponents/BlueFooter/BlueFooter";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';
export const MetalEstimations = () => {
  const text = (
    <>
      Enhance your project's accuracy using our metal estimation services. Our
      skilled team thrives in providing precise evaluations for a range of
      metal-related projects, guaranteeing thorough computations for materials,
      labor, and expenses. With our knowledge, you can bid with assurance,
      allocate resources effectively, and attain exceptional outcomes in the
      construction sector.
    </>
  );
  const text2 = (
    <>
      Comprehensive and precise steel takeoffs and estimations spanning from
      budgeting, order of magnitude, design, and bidding estimates. Precast
      calculations Cold-formed steel appraisals Steel framing assessments Rebar
      approximations Structural steel evaluations Bar bending plans Change order
      administration Rebar venture supervision Conflict resolution
      Recommendations for intelligent bid submissions
    </>
  );
  const text3 = (
    <>
      For a quick quote based on your project scope, call us at +1-917-300-1079
      or email us at bluebookestimator@gmail.com
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Struct. Steel Cost Estimating - Metals Estimating Services
          </title>
          <meta
            name="description"
            content="Offering precise metal estimating services to framing contractors, steel manufacturers, distributors, and fabricators for efficient project planning."
          />
        </Helmet>
      <ServiceNameContainer text="Metals Estimating Services" />
      <HalfTextHalfImg text={text} scr={MetalsHTHI} />
      <ServiceNameContainer text="Our Steel Estimating Services Include" />
      <HalfTextHalfImg text={text2} scr={MetalsHTHI2} />
      <div className="container">
       

        <ServiceNameContainer text="What We Quantify In Steel Takeoff Service" />
        <div className="">
          <p className="paragraph">
            Our estimates cover a thorough examination of metals and steel
            elements, such as materials, plates, connectors, accessories, and
            installation expenses, which contribute to project planning,
            procurement, budget control, reduced on-site storage, and ultimately
            enhancing efficiency and lowering costs for your ventures. All
            components are quantified and incorporated into an EXCEL
            spreadsheet, accompanied by marked-up blueprints and PDF files.
            According to your requirements, we can arrange your estimation using
            unit price, lump sum, or cost-plus approaches. We evaluate the
            following categories of materials:
          </p>
        </div>

        <div className="row w-100 m-0 mt-5 justify-content-center">
          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <ul>
                <li>Fasteners </li> <li>Fastenings </li> <li>Rebar </li>
                <li>Steel framing </li> <li>Metal joists </li>{" "}
                <li>Metal decking </li>
                <li>Stud framing </li> <li>Stick framing </li>{" "}
                <li>Dome structures </li>
                <li>Access ramps </li> <li>Stairs </li>{" "}
                <li>Load-bearing wall framing </li>
                <li>Lintels </li> <li>Ladders </li> <li>Railings</li>{" "}
                <li>Gratings</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <ul>
                <li>Decking </li> <li>Canopy </li> <li>Bollards </li>
                <li>Treads and nosing </li> <li>Base plates </li>{" "}
                <li>Steel Girders </li>
                <li>Trench drains</li> <li>Castings </li> <li>Trusses </li>
                <li>Ironwork </li> <li>Floor steel </li> <li>Roof steel </li>
                <li>Column steel </li> <li>Copper flashing </li>{" "}
                <li>Fireproofing </li> <li>Gusset plates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
       <Sample_and_Uploads/>
      </div>
      <BlueFooter />
    </div>
  );
};
