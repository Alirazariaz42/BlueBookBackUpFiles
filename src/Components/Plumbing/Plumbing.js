import React from "react";
import "./Plumbing.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import PlumbinfHTHI from "../../Assests/PlumbingHtHI.webp";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import tick from "../../Assests/tick-icon 2.webp";
import plumbingHTHI2 from "../../Assests/PlumbingHTHI2.webp";
import plumbingHTHI3 from "../../Assests/PlumbingHTHI3.webp";
import { Banner2 } from "../CommonComponents/Banner2";
import {Sample_and_Uploads} from "../CommonComponents/Sample_and_Uploads"
import { BlueFooter } from "../CommonComponents";
import { Helmet } from 'react-helmet';

export const Plumbing = () => {
  const text = (
    <>
      When considering a home renovation or addressing a plumbing issue,
      acquiring precise plumbing quotes is crucial for maintaining your budget.
      Plumbers often lack the time and hands-on experience to examine blueprints
      and designs to determine if they'll function properly in the actual
      setting. That's why our estimators invest additional effort into reviewing
      and making necessary adjustments. This is where plumbing estimation
      services prove to be beneficial. At our company, we supply expert plumbing
      estimates for projects of all sizes. Our team of professionals is ready to
      help you, whether you require a simple repair or a comprehensive plumbing
      makeover. To learn more about our plumbing estimation services and how we
      can assist you in achieving your plumbing goals within your budget,
      contact us immediately.
    </>
  );
  const text2 = (
    <>
      <ul>
        <li>Fire and Jockey Pump Installation</li>
        <li>Wet & Dry Sprinkler Systems</li>
        <li>Standpipe Systems</li>
        <li>Water Mist Systems</li>
        <li>Fire Sprinkler Systems</li>
        <li>Fire Protection Water Storage Tank</li>
        <li>Underground Fire Mains</li>
        <li>VESDA Systems</li>
        <li>Gaseous Fire Suppression Systems</li>
        <li>Antifreeze Piping System</li>
      </ul>
    </>
  );
  const text3 = (
    <>
      <ul>
        <li>Storm Water Drainage Systems</li>
        <li>Recycled Water Systems</li>
        <li>Landscape Watering Systems</li>
        <li>Irrigation Systems</li>
        <li>Sanitary Sewers</li>
        <li>Grease Traps</li>
        <li>Oil Separators</li>
        <li>Water Service Lines</li>
        <li>Fire Lines & Hydrants</li>
        <li>Backflow Devices</li>
        <li>Precast Water Vault</li>
        <li>Double Detector Check Valve</li>
        <li>Wet Tapping</li>
        <li>Road Boring</li>
      </ul>
    </>
  );
  return (
    <div>
    <Helmet>
            <title>
            Plumbing Estimating Services - Expert Plumbing Estimators
            </title>
            <meta
              name="description"
              content="Delivering expert plumbing estimating services & material takeoffs for contractors, aiding in efficient project bidding."
            />
          </Helmet>
      <ServiceNameContainer text="Plumbing Estimation" />
      <HalfTextHalfImg text={text} scr={PlumbinfHTHI} />
      <ServiceSubheadingContainer text="What we quantify in plumbing takeoffs?" />

      <div className="container">
        <div className="row w-100 justify-content-center points">
          <div
            className="col-lg-4 col-md-6 col-12 mt-4 "
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <h5 className="m-3 fw-bold">Key Features</h5>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Cold Water Pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Hot Water Pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Vent Pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Gas Pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Sanitary Pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Underground Pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Pipe Fittings (elbow, wye, reducers, tees, etc.)
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Pipe Concealment
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Insulation
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Valves
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Hangers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Struts
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Supports{" "}
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
              <h5 className="m-3 fw-bold">Equipment</h5>

              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Floor drains
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Roof drains
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Floor cleanouts
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Wall cleanouts
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Sump Pumps
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Ejector Pumps
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                House Pumps
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Water heaters
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Boilers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Re-circulating Pumps
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Oil Separators
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Fixture carriers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Flashings
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
              <h5 className="m-4 fw-bold">Products</h5>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Drinking fountains{" "}
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Water coolers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Toilets
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Urinals
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Bidets
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Sinks
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Basins
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Bathtubs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Showers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Faucets
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Strainers
              </p>
            </div>
          </div>
        </div>

        <div>
          <ServiceSubheadingContainer text="Fire Protection Plumbing Estimating" />
          <p className="paragraph p-4">
            In order to protect persons and property from the destructive
            consequences of fire, it is essential to provide fire protection
            plumbing estimates.
          </p>
          <HalfTextHalfImg text={text2} scr={plumbingHTHI2} />

          <ServiceSubheadingContainer text="We Provide Project Scope Estimation" />
          <p className="paragraph p-4">
            In order to protect persons and property from the destructive
            consequences of fire, it is essential to provide fire protection
            plumbing estimates.
          </p>
          <HalfTextHalfImg text={text3} scr={plumbingHTHI3} />
          <ServiceSubheadingContainer text="We Provide Project Scope Estimation" />
        </div>
        <div className="container mt-5">
          <p className="paragraph">
            {" "}
            We have performed plumbing estimating projects across major
            residential, commercial, industrial, manufacturing, hotels,
            institutional, healthcare and many other site utilities in both
            public and private sectors. Our plumbing cost estimators have the
            right skill and knowledge for the estimation of all types of
            plumbing systems. Few are listed under:
          </p>
        </div>
        <div className="row w-100 m-0 mt-5 justify-content-center">
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h4 className="headingStyling">Industrial Plumbing Estimation</h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>Industrial Gas Systems</li>{" "}
                  <li>Compressed Air Systems</li> <li>Water Systems</li>{" "}
                  <li>Industrial Waste Systems</li>
                  <li>Steam & Condensate Systems</li>{" "}
                  <li>Gas & Vacuum Systems</li>{" "}
                  <li>Sewer & Wastewater Systems</li>{" "}
                  <li> Water Treatment Equipment</li>
                  <li>Industrial Piping Systems</li>{" "}
                  <li>Utility Piping Systems</li>{" "}
                  <li>Penetration Fire-stopping</li>{" "}
                  <li>Backflow Prevention Systems</li>
                  <li>Process Cooling & Heating Systems</li>
                  <li>Medical Gas Systems</li>
                  <li>Drainage Systems</li>
                  <li>Heat Systems</li>
                  <li>HVAC Systems</li>{" "}
                </ul>
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <h4 className="headingStyling">
                  Commercial Plumbing Estimation
                </h4>
                <p className="paragrapg mt-5">
                  <ul>
                    <li>Heating, Cooling & Ventilation Systems</li>{" "}
                    <li>Water Heating Systems</li>
                    <li>Sanitary & Drainage Systems</li>
                    <li>Water Filtration Systems</li>
                    <li>Recycled Water Systems</li>
                    <li>Irrigation Systems</li>
                    <li>Fire Sprinkler Systems</li>
                    <li>Landscape Watering Systems</li>
                    <li>Roof Water Catchment</li>
                    <li>Stormwater Discharge Systems</li>
                    <li>Cold Water Reticulation & </li>
                    <li>Pressurisation</li>
                    <li>Hot Water Generation & Reticulation</li>
                    <li>Swimming Pool Plumbing Systems</li>
                    <li>Gas & Water Plumbing</li>
                    <li>Fire Protection Systems</li>
                    <li>Liquid Fueling Systems</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <h4 className="headingStyling">
                  Industrial Electrical Takeoffs
                </h4>
                <p className="paragrapg mt-5">
                  <ul>
                    <li>Domestic Water Supply & Distribution Systems</li>
                    <li>Garbage Disposal Systems</li>
                    <li>Residential HVAC Systems</li>
                    <li>Sanitary & Storm Systems</li>
                    <li>Kitchen Water & Waste Systems</li>
                    <li>Bathroom Plumbing Systems</li>
                    <li>Natural Gas Systems</li>
                    <li>Water Heating Systems</li>
                    <li>Gas & Water Lines</li>
                    <li>Swimming Pool Plumbing</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sample_and_Uploads/>
      {/* <Banner2
        text="Offer:
 Contact Us & get 30% Off On Your First Estimate!"
      /> */}
      <BlueFooter />
    </div>
  );
};
