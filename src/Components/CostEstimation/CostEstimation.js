import React from "react";
import "./CostEstimation.css";
import pic1 from "../../Assests/Group 224.png";
import { Banner } from "../CommonComponents/Banner";
import { Link } from "react-router-dom";
import elips5 from "../../Assests/Ellipse 5.png";
import elips6 from "../../Assests/Ellipse 6.png";
import pic2 from "../../Assests/pic.jpeg";

import check from "../../Assests/Vector.webp";
import tick from "../../Assests/tick-icon 2.webp";
import Industy_pic from "../../Assests/Costestimationpic.webp";
import TakeOff from "../../Assests/takeOff1.webp";
import sheduling from "../../Assests/Seeduling.webp";
import Footer from "../../Components/CommonComponents/BlueFooter/BlueFooter";
import { PageNameContaqiner } from "../CommonComponents/PageNameContaqiner";
import { BlackBGSubHeading } from "../CommonComponents/BlackBGSubHeading.js";

import call from "../../Assests/CALL.png";
import whatapp from "../../Assests/whatsapp.svg";
import location from "../../Assests/location.png";
import { Button } from "bootstrap";
import { Helmet } from "react-helmet";
export const CostEstimation = () => {
  const BannerText = (
    <>
      For a quick quote based on your project scope, call us{" "}
      <a
        style={{ color: "white", marginRight: "7px" }}
        href="tel:+1 917 300 1079"
      >
        +1 917 300 1079
      </a>
      or email us at{" "}
      <a style={{ color: "white" }} href="mailto:bluebookestimators@gmail.com">
        bluebookestimators@gmail.com{" "}
      </a>
    </>
  );
  return (
    <>
      <Helmet>
        <title>The BlueBook Estimators:  Construction Cost Estimating Services</title>
        <meta name="description" content="Leading construction cost estimating in California, Texas, Florida, New York, and across the US, providing unparalleled professional services." />
      </Helmet>
      <PageNameContaqiner text="Cost Estimation (Labor & Material)" />

      <div className="row w-100 m-0" style={{ alignItems: "center" }}>
        <div className="col-lg-6 col-md-6 col-12">
          <p className="p-lg-4 p-2 m-0">
            The BlueBook Estimators provide an extensive variety of construction
            cost estimating and cost management solutions to accommodate the
            ever-expanding construction sector. With our vast experience in the
            industry, we have gained complete comprehension of market
            conditions, enabling us to manage cost estimates for projects of any
            complexity. Our adept team of estimators furnish precise, prompt,
            and all-encompassing estimates, including marked-up plans, with a
            strong emphasis on accuracy. We maintain engagement with our clients
            from the inception through the completion of their projects.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-12 p-lg-4 p-2 text-center">
          <img src={pic1} alt="img" className="imgCostEstimation" />
        </div>
      </div>
      <div className="container">
        <BlackBGSubHeading text="What Type Of Cost Estimations We Provide To Our Client?" />

        <div className="costContaainer">
          <span>Labor Cost Estimation</span>
        </div>
        <div className="LabourCostParaGraph">
          <p>
            Estimating labor costs include the direct outlays for hiring
            builders, professionals, and supplementary personnel to complete a
            project. These costs encompass engaging excavation experts, masons,
            electrical engineers, designers, and assorted construction workers.
            Our organization can provide labor expense projections according to
            your working hours, dependent on the project.
          </p>
        </div>
        <div className="costContaainer">
          <span>Material Cost Estimation</span>
        </div>
        <div className="row w-100 m-0" style={{ alignItems: "center" }}>
          <div className="col-lg-6 col-md-6 col-12">
            <p className="pt-lg-5 pt-4 p-2  m-0">
              A material estimate, also referred to as a quantity takeoff,
              construction takeoff, or material takeoff, involves obtaining
              information from blueprints regarding the required materials and
              their respective quantities for a construction project. The
              material takeoff exclusively counts materials, while labor
              expenses, equipment, and other indirect costs are incorporated
              into construction estimates separately. It is essential to conduct
              a material estimate well in advance of starting any construction
              work, as it helps determine the project's feasibility.
            </p>

            <b>
              <p className="pt-lg-4 p-2 m-0">Calculate Quantity of Materials</p>
            </b>
            <p className="pt-lg-4 p-2 m-0">
              Precisely computing material amounts in a building project entails
              dissecting elements, gauging dimensions, accounting for waste,
              identifying material density, and transforming volumes or areas to
              quantities. This thorough method guarantees exact material
              forecasting, avoiding expensive mistakes and securing project
              triumph. Employing estimation software and seeking advice from
              professionals can improve precision and simplify the process even
              more.
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-12 p-lg-4 p-2 text-center">
            <img src={pic2} alt="img" className="imgCostEstimation" />
          </div>
        </div>

        <BlackBGSubHeading text=" What Type Of Methods Can Be Use For Estimation?" />
        <div className="p-lg-5 p-3">
          <p className="EstimationMethods">
            <img src={check} height={25} width={25} className="vector" />
            Unit Pricing Method
          </p>
          <p className="EstimationMethods">
            <img src={check} height={25} width={25} className="vector" />
            Square Foot Method
          </p>
          <p className="EstimationMethods">
            <img src={check} height={25} width={25} className="vector" />
            Rule of Two Methods
          </p>
        </div>

        <BlackBGSubHeading text="  For Which Type of Construction Client Use Our Service?" />

        <div className="costContaainer">
          <span>RESIDENTIAL ESTIMATION</span>
        </div>
        <div>
          <p className="RESIDENTIAL_ESTIMATION">
            Residential estimating services are crucial in the real estate
            sector by delivering precise and all-encompassing evaluations of
            property worth. These services cover numerous valuation techniques,
            such as the sales comparison method, income method, and cost method,
            to establish the equitable market value of residential properties.
            Serving as invaluable support for buyers in making educated
            purchasing choices, aiding sellers in setting competitive house
            prices, and guiding investors in estimating potential p0rofits,
            residential assessment services supply vital knowledge that bolsters
            assured and well-informed property transactions.
          </p>
        </div>
        <div className="container">
          <div className="row w-100 text-center">
            <div className="col-lg-4 col-md-6 col-12 text-left ">
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Single Family Residential Houses
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Multi-Family Residential Houses
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Duplex/Triplex Houses
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Custom Houses
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 text-left">
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Modular Homes
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Apartments
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Home Improvements
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Bungalows
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 text-left ">
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Townhouses
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Remodeling
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Home Additions
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Mansions
              </p>
            </div>
          </div>
        </div>
        <div className="costContaainer">
          <span>COMMERCIAL ESTIMATION</span>
        </div>
        <div>
          <p className="RESIDENTIAL_ESTIMATION">
            We provide accurate predictions for domestic trials based on current
            charges and other important factors. Our predictions can help you
            stay within budget and schedule and also ensure the safety and
            stability of your domestic structure systems through our precise
            construction assessments.
          </p>
        </div>
        <div className="container">
          <div className="row w-100 justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 text-left ">
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Restaurants
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Prisons & Police Station
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Educational Facilities
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Retail Spaces
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Couts
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Libraries
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Parks Building
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 text-left ">
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Airports
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                High Rise Buildings{" "}
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Condominiums
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Shopping Centers
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Office Buildings
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Medical Facilities
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Bus & Subway Facilities
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 text-left ">
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Theaters
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Museums
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Exhibitions Buildings
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Fire Stations
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Parking Garages
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Hotels & Motels
              </p>
              <p className="residental_Estimate">
                <img src={tick} className="tick" height={20} width={20} />
                Warehouses
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="costContaainer">
            <span>INDUSTRIAL ESTIMATION</span>
          </div>
          <p className="RESIDENTIAL_ESTIMATION">
            Locating trustworthy industrial estimation services can be a
            challenge. Many estimators lack the necessary experience for
            handling sizable industrial projects. However, we possess the
            expertise to craft estimates that offer assistance throughout the
            project lifecycle, from bidding to execution. Our estimates are also
            well-suited for comprehensive assessments of large industrial
            projects.
          </p>
          <div className="text-center industtrialPicContainer">
            <img src={Industy_pic} className="IndustyrialPic " />
          </div>
          <div className="costContaainer text-center ">
            <button>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/work-samples/"
              >
                Check out our Work Samples
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <BlackBGSubHeading text="  Checkout Our More Services" />
        </div>

        <div className="mt-lg-4 mt-2 mb-3">
          <div className="row w-100 m-0 justify-content-center">
            <div className="col-lg-3 col-md-4 ">
              <div
                class="card mt-lg-4  mt-3 "
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img class="card-img-top" src={TakeOff} alt="Card image cap" />
                <div class="card-body card-bodyCustom text-center">
                  <h5 class="card-title">Quantities & Materials Takeoffs </h5>

                  <Link
                    to="/construction-takeoff-services/"
                    class="btn btn-link costumlink"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4  ">
              <div
                class="card mt-lg-4 mt-3"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  class="card-img-top"
                  src={sheduling}
                  alt="Card image cap"
                />
                <div class="card-body card-bodyCustom text-center">
                  <h5 class="card-title">Construction Work Scheduling</h5>

                  <Link to="/cost-scheduling/" class="btn btn-link costumlink">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner text={BannerText} />
      {/* <div className="bannercontainerBG mt-lg-5 mt-5">
        <div className="row w-100 m-0" style={{ alignItems: "baseline" }}>
          <div className="col-lg-7 col-md-7 col-12">
            <p>
              For a quick quote based on your project scope, call us at
              +1-917-300-1079 or email us at bluebookestimators@gmail.com
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-0"></div>
          <div className="col-lg-3 col-md-3 col-12 text-center">
            <button className="PlansBtn">
              <span className="Upload">Upload your</span>
              <span className="plans"> Plans</span>
            </button>
            <div className="mt-2 ">
              <a href="">
                <img src={elips5} className="PlanUploadImgs" alt="" />
              </a>
              <a href="">
                <img src={elips6} className="PlanUploadImgs" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div>
        <Footer />
      </div>
    </>
  );
};
