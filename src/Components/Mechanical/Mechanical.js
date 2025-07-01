import React from "react";
import "./Mechanical.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import MechanicalHTHI from "../../Assests/MechanicalHTHI.webp";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import { Banner2 } from "../CommonComponents/Banner2";
import tick from "../../Assests/tick-icon 2.webp";
import MechanicalCosEstimationIMG from "../../Assests/MechanicalCosEstimationIMG.webp";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";
import { Helmet } from 'react-helmet';

import { BlueFooter } from "../CommonComponents";
export const Mechanical = () => {
  const text = (
    <>
      Discovering dependable mechanical estimating services can be quite
      challenging. Furthermore, these services are essential for builders,
      contractors, designers, and others involved in the construction field. In
      this scenario, if you're seeking mechanical takeoff services or aiming to
      obtain the finest estimates for your bids, now is the perfect time to
      reach out to us. We are a company that specializes in delivering top-notch
      mechanical estimates for our clientele. In this regard, we boast over 23
      years of experience, signifying our ability to provide exceptional work.
      Additionally, our team is highly skilled and efficient. To top it off, we
      utilize cutting-edge software for estimations that other mechanical
      estimating companies might not employ. So, get in touch with us and let us
      know your requirements in this area. Rest assured, we'll be more than
      happy to assist you.
    </>
  );
  return (
    <div>
    <Helmet>
            <title>
            Mechanical Estimating Services: The BlueBook Estimators
            </title>
            <meta
              name="description"
              content="We strive to offer comprehensive mechanical estimating services, empowering clients to secure bids successfully and boost profitability."
            />
          </Helmet>
      <ServiceNameContainer text="Mechanical Estimation" />
      <HalfTextHalfImg text={text} scr={MechanicalHTHI} />
      <ServiceSubheadingContainer text="Services You Can Choose" />

      <div className="container">
        <div className="row w-100 justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-12 mt-4 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h5 className="m-2 mb-4 fw-bold">Mechanical Cost Estimates</h5>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Mechanical quantity takeoffs
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Bid Estimates & Bidding assistance
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Design & budget estimates
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Change order estimates
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Preliminary estimates & feasibility studies
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Independent estimates
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Expert witness
              </p>
              <img
                src={MechanicalCosEstimationIMG}
                className="MechanicalCosEstimationIMG"
              />
            </div>
            <div></div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-12  mt-4 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <h5 className="m-2 mb-3 fw-bold">
                Residential & Commercial Mechanical Estimates
              </h5>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Mixed-use Residential
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Single-family
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Multifamily
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Apartment Complexes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Offices
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Warehouses
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Restaurants
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Hotels
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Medical Centers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Institutional Buildings
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Retail Stores
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Shopping Malls
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Renovations
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Repairs
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12  mt-4">
            <h5 className="m-2 mb-3 fw-bold">
              Industrial & Process Control Mechanical Estimates
            </h5>

            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Process Pipelines
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              HVAC Systems
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Hydronic Piping
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Petrochemical
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Refinery
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Food Processing
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Co-Generation
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Power
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Bio-fuels
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Water Treatment
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Waste Treatment
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Pharmaceutical
            </p>
            <p className="residental_Estimate">
              <img src={tick} className="tick" height={20} width={20} />
              Pulp & Paper
            </p>
          </div>
        </div>
        <ServiceSubheadingContainer text="Mechanical Takeoffs?" />

        <h5 className="m-4  fw-bold text-center">
          Mechanical Cost Estimates Following items are generally quantified in
          our mechanical takeoffs:
        </h5>
        <div className="row w-100 justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-12 mt-4 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Air devices
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Air handling units
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Air-cooled condensing units
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Air conditioning units
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Exhaust fans
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Manual volume damper
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Rooftop units
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Dust smoke detector
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Pump
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Louver
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-12  mt-4 "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Ducts{" "}
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Gas pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Vent pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Refrigerate pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Condensate drain pipes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Pipe fittings
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Sheet metal ducts
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Duct fittings
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Thermostat
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Duct insulation
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Duct supports
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-12  mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Hangers{" "}
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Boilers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Heat pumps
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Humidifiers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Air filters
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Air cleaners
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Steam systems
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Water heaters
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Chillers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Backdraft damper
              </p>
            </div>
          </div>
        </div>
      </div>
      <Sample_and_Uploads />
      <BlueFooter />
    </div>
  );
};
