import React from "react";
import "./SiteConstruction.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import SiteConstructionHtHi from "../../Assests/SiteConstructionHtHI.png";
import tick from "../../Assests/tick-icon 2.webp";
import { Card } from "../CommonComponents/Card";
import cardimg1 from "../../Assests/Card (1).webp";
import cardimg2 from "../../Assests/Card (2).webp";
import cardimg3 from "../../Assests/Card (3).webp";
import cardimg4 from "../../Assests/Card (4).webp";
import cardimg5 from "../../Assests/Card (5).webp";
import cardimg6 from "../../Assests/Card  (6).webp";
import cardimg7 from "../../Assests/Card  (7).webp";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";
import { Helmet } from "react-helmet";
export const SiteConstruction = () => {
  const text = (
    <>
      The Blue Book Estimators serves as the premier choice for precise and
      comprehensive site work estimating solutions, advantageous to landscaping
      contractors, land developers, cost estimators and general contractors. Our
      swift 24 to 48-hour response time offers vital cut and fill takeoffs,
      allowing clients to secure bids and lower expenses efficiently. We focus
      on assisting bustling excavation contractors who delegate their excavation
      estimating requirements to our skilled team, liberating them from
      labor-intensive chores.
    </>
  );
  return (
    <div>
      <Helmet>
        <title>The BlueBook Estimators: Sitework Estimating Services</title>
        <meta
          name="description"
          content="Excavators, site engineers, and specialized contractors rely on sitework estimating services for a comprehensive overview of total project costs."
        />
      </Helmet>
      <ServiceNameContainer text="Site Construction" />
      <div className="container-fluid">
        {" "}
        <HalfTextHalfImg text={text} scr={SiteConstructionHtHi} />
      </div>
      <ServiceNameContainer text="Site Work Estimating Services Include" />
      <div className="container">
        <div
          className="mt-4 "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="paragraph">
            Estimation of Excavation and backfill including total soil
            capacities, amounts, and divisions Terrain grading Landscape
            calculation, including structural, natural & watering terra firm
            volumes.
          </p>
        </div>

        <div className="mt-5">
          <ul
            class="nav nav-pills mb-3 "
            id="pills-tab"
            role="tablist"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <li class="nav-item Halfwidth" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                We can produce this for you
              </button>
            </li>
            <li class="nav-item Halfwidth" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Excavation Estimating Services
              </button>
            </li>
          </ul>
          <div
            class="tab-content mt-4 "
            style={{ minHeight: "110px" }}
            id="pills-tabContent"
          >
            <div
              class="tab-pane fade show active text-center"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <p>
                <img src={tick} width={15} height={15} className="m-1" />
                Estimate/Takeoff Cut/Fill quantities for your Site development
                and construction jobs.
              </p>
              <p>
                <img src={tick} width={15} height={15} className="m-1" />
                Mass Haul Diagrams to lessen and mitigate the earth and soil
                movement.
              </p>
            </div>
            <div
              class="tab-pane fade text-center"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <p>
                <img src={tick} width={15} height={15} className="m-1" />
                Excavation estimating services provide accurate cost assessments
                for earthmoving
              </p>
              <p>
                <img src={tick} width={15} height={15} className="m-1" />
                Site preparation projects, ensuring informed decision-making and
                successful project execution
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServiceNameContainer text="Our Variety Of Site Work Estimating Services." />
      <div></div>
      <div className="container">
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
                title="Quantity takeoffs & Cost Estimates"
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
                title="Sitework Feasibility Analysis"
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
                title="Land Development Consultation"
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
                title="Bidding Assistance"
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
                title="Design phase Estimating Assistance"
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
                title="Change Order Management"
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
                title="Value Engineering"
                img={cardimg7}
                text="Optimize project value through our value engineering expertise, enhancing efficiency and cost-effectiveness while maintaining quality."
              ></Card>
            </div>
          </div>
        </div>
      </div>
      <Sample_and_Uploads />
      <BlueFooter />
    </div>
  );
};
