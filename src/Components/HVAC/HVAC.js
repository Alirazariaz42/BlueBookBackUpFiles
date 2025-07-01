import React from "react";
import "./HVAC.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { Banner2 } from "../CommonComponents/Banner2";
import { BlueFooter } from "../CommonComponents";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import HVACHTHI1 from "../../Assests/HVACHTHI1.webp";
import HVACHTHI2 from "../../Assests/HVACHTHI2.webp";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";
import { Helmet } from "react-helmet";

export const HVAC = () => {
  const text = <>Offer: Get 30% Off On Your First Estimate!</>;
  const text2 = (
    <>
      Heating, Ventilation, and Air-Conditioning professionals seek our
      expertise for HVAC estimation services. Our MEP estimators, who specialize
      in HVAC estimating, quantify ducts, hangers, elbows, and fixtures, as well
      as condensing and evaporating units. These skilled estimators are adept at
      marking up plans and providing detailed line item descriptions. The highly
      experienced team at World Estimating demonstrates their prowess in
      estimation and quantity surveying at our facility. We've collaborated with
      subcontractors, design engineers, and fabricators in the past, ensuring
      all HVAC specialists have a clear understanding of the exact costs
      involved for bidding and planning purposes.
    </>
  );
  const text3 = (
    <>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Duct-work</li>
            <li>Condensing units</li>
            <li>Roof top units</li>
            <li>Air Handler Units</li>
            <li>Air Devices</li>
            <li>Casings</li>
            <li>Duct insulation</li>
            <li>Exhaust Fans</li>
            <li>Piping</li>
            <li>Hangers</li>
          </ul>
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Supports</li>
            <li>Pumps</li>
            <li>Duct smoke detector</li>
            <li>Volume dampers</li>
            <li>Thermostats</li>
            <li>Louver</li>
            <li>Clean-out</li>
            <li>Bird screen</li>
            <li>Furnaces</li>
            <li>Heat Pumps</li>
          </ul>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>HVAC Estimating Services – HVAC Takeoff </title>
        <meta name="description" content="We are providing HVAC estimating services to Heating Ventilation and Air-Conditioning contractors for their commercial projects" />
      </Helmet>
      <ServiceNameContainer text="HVAC Estimation" />
      <HalfTextHalfImg text={text2} scr={HVACHTHI1} />
      <ServiceSubheadingContainer text="The Items We Quantify In HVAC Estimating And Takeoffs:" />
      <HalfTextHalfImg text={text3} scr={HVACHTHI2} />
      <ServiceSubheadingContainer text="Flexibility To Handle All Types & Sizes Of HVAC Cost Estimates" />
      <div className="container mt-4">
        <div className="row w-100 justify-content-center ulContainer">
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul>
                <li>Smart HVAC Systems</li>
                <li>Sustainable Building Design</li>
                <li>DeVAP HVAC Systems</li>
                <li>Solar HVAC Systems</li>
                <li>Geothermal HVAC Systems</li>
                <li>BAS (Building Automation System)</li>
                <li>BMS (Building Management System)</li>
                <li>Refrigeration Systems</li>
                <li>Heating & Air Conditioning</li>
                <li>Ventilation</li>
                <li>Hybrid Heat Systems</li>
                <li>Gas Systems</li>
                <li>Exhaust Systems</li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-12"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <ul>
                <li>High Purity Water Systems</li>
                <li>Air Purification Systems</li>
                <li>Humidification Systems</li>
                <li>Boiler & Heating Plants</li>
                <li>Chilled & condenser water plants</li>
                <li>Heat Recovery Systems</li>
                <li>Variable Air Volume Systems</li>
                <li>Hydronic Heating & Cooling Systems</li>
                <li>Steam Heating Systems</li>
                <li>Clean Room Systems</li>
                <li>Heat Pump Systems</li>
                <li>Combined Heat & Power Systems</li>
                <li>Energy Management Control Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Sample_and_Uploads />
      {/* <Banner2 text={text} /> */}
      <BlueFooter />
    </div>
  );
};
