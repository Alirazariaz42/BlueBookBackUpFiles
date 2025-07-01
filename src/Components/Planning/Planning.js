import React from "react";
import "./Planning.css";
import planing from "../../Assests/planning.webp";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { PageNameContaqiner } from "../CommonComponents/PageNameContaqiner";
import { CommonCard } from "../CommonComponents/CommonCard";
import { BlackBGSubHeading } from "../CommonComponents/BlackBGSubHeading.js";
import { Banner } from "../../Components/CommonComponents/Banner";
import { MoreServices } from "../../Components/CommonComponents/MoreServices";
import BlueFooter from "../../Components/CommonComponents/BlueFooter/BlueFooter";
import card1 from "../../Assests/card1.webp";
import card2 from "../../Assests/card2.webp";
import card3 from "../../Assests/card3.png";
import card4 from "../../Assests/card4.png";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";

import MaterialTakeoff from "../../Assests/MaterialTakeOff (2).webp";
import CostSetimatio from "../../Assests/CostEstimation.webp";
import Link from "antd/es/typography/Link";
import { Helmet } from 'react-helmet';
export const Planning = () => {
  const text1 = (
    <>
      In the realm of project management, the initial and essential stage is
      strategizing. This requires devising an in-depth framework for the
      project's course. It's important to note that isn't synonymous with
      setting timelines. Strategizing can be compared to crafting a
      comprehensive map alongside project leads and construction personnel,
      whereas setting timelines involves incorporating that map into a
      chronological sequence with the assistance of timeline specialists.
      Therefore, strategizing establishes the direction, and setting timelines
      ensures that everything occurs at the appropriate moment.
    </>
  );
  const text2 = `For a quick quote based on your project scope, call us at +1-917-300-1079 or email us at bluebookestimators@gmail.com`;
  return (
    <>
      <Helmet>
        <title>The BlueBook Estimators: Simplify Your Project Planning</title>
        <meta
          name="description"
          content="Effortless project management: streamline tasks, cost estimating, and boost efficiency with The BlueBook Estimators. Try now!"
        />
      </Helmet>
      <PageNameContaqiner text="Planning" />
      <HalfTextHalfImg text={text1} scr={planing} />
      <div className="">
        <div className="row w-100 justify-content-center">
          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CommonCard
              heading="Design Estimates"
              paragraph={
                <>
                  <ul>
                    <li>Design Estimates</li>
                    <li>Screening estimates</li>
                    <li>
                      Engineer's estimates (based on specifications and
                      architectural plans).
                    </li>
                    <li>Cost estimating services</li>
                  </ul>
                </>
              }
            />
          </div>
          <div
            className="col-md-6 col-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CommonCard
              heading="Control Estimates"
              paragraph={
                <>
                  <ul>
                    <li>Budget cost estimate for financing purposes.</li>
                    <li>
                      Budgeted cost after assigning to contractor but before
                      construction.
                    </li>
                    <li>
                      Estimated cost of completion during ongoing construction.
                    </li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <BlackBGSubHeading text="Types of planning" />
      </div>
      <p className="ProjectsPlanning">
        There are several types of project planning. The three major types of
        constructionproject planning are
      </p>
      <div>
        <div className="container">
          <div className="row w-100 justify-content-center text-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <div className="CardContainer text-center">
                <div className="">
                  <img src={card1} height={200} width={200} />
                </div>
                <div className="CardText">
                  <h5>Strategic planning</h5>
                  <p>
                    This entails the high-level determination of the
                    project goals
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <div className="CardContainer text-center">
                <div className="">
                  <img src={card2} height={200} width={200} />
                </div>
                <div className="CardText">
                  <h5> Operational planning </h5>
                  <p>
                    This entails the comprehensive preparation needed to achieve
                    the strategic goals
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <div className="CardContainer text-center">
                <div className="">
                  <img src={card3} height={200} width={200} />
                </div>
                <div className="CardText">
                  <h5> Strategic planning </h5>
                  <p>
                    Strategic planning Owner's planners decide what projects to
                    pursue and when to finish to meet goals, while construction
                    teams create execution plans following their guidelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <div className="CardContainer text-center">
                <div className="">
                  <img src={card4} height={200} width={200} />
                </div>
                <div className="CardText">
                  <h5>Operational Planning</h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p>
                      Operational planning involves developing detailed
                      strategies and actions to efficiently carry out day-to-day
                      tasks and achieve short-term objectives within an
                      organization.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <BlackBGSubHeading text="Checkout Our More Services" />
      <MoreServices
        text1="Cost Estimation (Labor & Material)"
        text2="Quantities & Materials Takeoffs"
        src1={CostSetimatio}
        scr2={MaterialTakeoff}
        link1="/cost-estimating-services/"
        link2="/construction-takeoff-services/"
      />
      <Sample_and_Uploads />
      <BlueFooter></BlueFooter>
    </>
  );
};
