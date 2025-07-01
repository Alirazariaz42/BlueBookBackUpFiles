import React from "react";
import { PageNameContaqiner } from "../CommonComponents/PageNameContaqiner";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { BlackBGSubHeading } from "../CommonComponents/BlackBGSubHeading";
import materialTakeoff from "../../Assests/MaterialTakeOff and Quantities.webp";
import check from "../../Assests/check.webp";
import diagram from "../../Assests/diagram.webp";
import { HalfImghalfText } from "./HalfImghalfText";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { MoreServices } from "../CommonComponents/MoreServices";
import CostSetimatio from "../../Assests/CostEstimation.webp";
import scheduling from "../../Assests//Scheduling.webp";
import { Link } from "react-router-dom";import { Helmet } from 'react-helmet';
const text = (
  <>
    The BlueBook Estimators provides the best estimation services that utilizes
    experienced takeoff specialists who possess the skills and understanding
    needed to provide all-inclusive services from beginning to end. A
    significant amount of profit margin funds can be lost due to mistakes in
    ordering framing materials, more than any other part of the procedure.
    Therefore, we have invested in an advanced software system, after thorough
    evaluation, which allows us to tailor our Material Estimates based on local
    customs. So, submit your designs to us and obtain precise material and
    quantity takeoff evaluations, along with a 30% discount on your initial
    service.
  </>
);
const text1 = (
  <>
    Our estimators are skilled in various construction software tools such as
    PlanSwift, Bluebeam, On Screen Takeoff (OST) and MS Project (Scheduling) .
  </>
);
const text2 = (
  <>
    Our work would be in editable excel sheet – if required, we can use your
    template or can put your company details on the estimate/proposal. For to do
    quantities takeoff – we use software Planswift, BlueBeam, On Screen Takeoff
    (OST)
    <br />
    <br />
    <b>
      Mostly we use Planswift. We will be very happy to provide Software files
      as well as Markups/color drawings (if required).
    </b>
  </>
);
const text4 = (
  <>
    For a quick quote based on your project scope, call us at{" "}
    <a style={{ color: "white" }} href="tel:+1 917 300 1079">
      +1 917 300 1079
    </a>{" "}
    or email us at{" "}
    <a
      style={{ color: "white" }}
      href="mailto:bluebookestimators@gmail.comsomeone@example.com"
    >
      bluebookestimators@gmail.com{" "}
    </a>
  </>
);
const text5 =
  "So let’s share your drawing with us and get correct estimation of material and quantity takeoff with 30% off on first service";

export const Material_TakeOff = () => {
  return (
    <div>
      <Helmet>
        <title>Construction Takeoff Services - Quantity & Material Takeoff</title>
        <meta name="description" content="The BlueBook Estimators offer the best construction takeoff services to ensure optimal project planning and cost accuracy." />
      </Helmet>
      <PageNameContaqiner text="Quantities & material TakeOff" />
      <HalfTextHalfImg text={text} scr={materialTakeoff} />

      <div className="container">
        <Banner text={text5} />
        <BlackBGSubHeading text="Quantities TakeOff" />
        <div>
          <p className="TakeOffText">
            Our team provides high quality takeoff services to many construction
            companies. Our experienced team, equipped with the latest
            technologies and tools, provides fast and accurate quantity takeoff
            numbers for labor and material. Even on short notice, we can provide
            many takeoff services within 24 hours. With 10 years of experience
            in the US construction industry, we have successfully provided
            integrated quantity takeoff services and solutions for a variety of
            projects, including remodeling and renovations in different parts of
            the project.
          </p>

          <div className="CSIDivisions">
            <p>
              We Offer Quantity Takeoff Services For All CSI Divisions Please
              Checkout{" "}
            </p>
            <button>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/services/"
              >
                CSI Divisions
              </Link>
            </button>
          </div>

          <BlackBGSubHeading text="Material Takeoff " />
          <div>
            <p className="TakeOffText">
              Our material estimation services aid in effectively strategizing
              your project budget. By utilizing our services, you boost
              efficiency and save time. We provide comprehensive reports of
              expected expenses and materials needed for your project, allowing
              you to submit competitive bids and begin work promptly. Planning
              ahead with accurate quantity estimations will preserve time and
              resources by ensuring you have everything essential. Our team has
              confidently delivered extensive material estimation services and
              consulting solutions for a wide range of projects. We excel in
              both new construction endeavors and renovations across various
              sectors. Through our expertise, we assure precise and reliable
              outcomes, contributing to the accomplishment of every project.
              Depend on us to handle your quantity estimation needs with
              confidence and professionalism, irrespective of the project's
              scale or complexity.
            </p>
          </div>
          <div>
            <h1 className="Material_Takeoff_List">
              Material Takeoff List - Quantity Takeoff Services{" "}
            </h1>
          </div>

          <div className="row w-100 m-0">
            <div
              className="col-lg-3 col-md-6 col-6 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <p>
                  <img src={check} height={10} width={10} /> General Requirement{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Site Works{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Concrete
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Masonry
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <p>
                  <img src={check} height={10} width={10} /> Metals{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Wood and Plastics{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Thermal and
                  Moisture Protection
                </p>
                <p>
                  <img src={check} height={10} width={10} />
                  Doors and Windows
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-6 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <p>
                  <img src={check} height={10} width={10} /> Finishes{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Specialties{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} />
                  Equipment
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Furnishings
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-6 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div>
                <p>
                  <img src={check} height={10} width={10} /> Special
                  Construction{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Conveying Systems{" "}
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Mechanical /
                  Plumbing
                </p>
                <p>
                  <img src={check} height={10} width={10} /> Electrical
                </p>
              </div>
            </div>
          </div>
          <HalfImghalfText text1={text1} text2={text2} scr={diagram} />
          <Banner text={text4} />
        </div>
        <BlackBGSubHeading text="Checkout Our More Services" />
      </div>
      <MoreServices
        text1="Cost Estimation "
        text2=" Cost Scheduling"
        src1={CostSetimatio}
        scr2={scheduling}
        link1="/cost-estimating-services/"
        link2="/cost-scheduling/"
      />
      <BlueFooter />
    </div>
  );
};
