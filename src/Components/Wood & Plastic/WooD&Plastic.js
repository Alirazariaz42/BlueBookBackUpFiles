import React from "react";
import "./WooD&Plastic.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import woodandPlastic1 from "../../Assests/woodandPlastic1.webp";
import woodandPlastic2 from "../../Assests/woodandPlastic2.webp";
import { Banner } from "../CommonComponents/Banner";
import BlueFooter from "../CommonComponents/BlueFooter/BlueFooter";
import { Helmet } from 'react-helmet';
export const WooDandPlastic = () => {
  const text = (
    <>
      The Bluebook Estimators are, your reliable source for comprehensive wood
      and plastics estimation service. We understand the pivotal role that wood
      and plastics play in a variety of projects, and our data is tailored to
      provide accurate insights for effective planning and budgeting.
    </>
  );
  const text2 = (
    <>
      <ol type="1">
        <li className="fw-bold">Lumber and Timber:</li>
        <ul>
          <li>
            Breakdown of various types of wood (softwood, hardwood) and grades.
          </li>
          <li>
            Cost estimates for different dimensions and lengths of lumber.
          </li>
          <li>Information on sustainable sourcing and eco-friendly options.</li>
        </ul>

        <li className="fw-bold">Lumber and Timber:</li>
        <ul>
          <li>List of plywood, particleboard, and MDF panels.</li>
          <li>Estimation of costs based on panel type and thickness.</li>
          <li>
            Consideration of specialized panels like fire-resistant or
            moisture-resistant
          </li>
        </ul>

        <li className="fw-bold">Lumber and Timber:</li>
        <ul>
          <li>
            Data on finished wood products like doors, windows, and moldings.
          </li>
          <li>Estimation of costs for standard and custom woodwork.</li>
          <li>
            Labor estimates for installation, including trimming and finishing.
          </li>
        </ul>
      </ol>
    </>
  );
  const text3 = (
    <>
      For a quick quote based on your project scope, call us at{" "}
      <a style={{ color: "white" }} href="tel:+1 917 300 1079">
        +1 917 300 1079
      </a>{" "}
      or email us at{" "}
      <a style={{ color: "white" }} href="mailto:bluebookestimators@gmail.com">
        bluebookestimators@gmail.com{" "}
      </a>
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Wood-Plastic Composites Estimating Services  
          </title>
          <meta
            name="description"
            content="we offer wood & plastic composite estimating and takeoff services for general contractors and subcontractors."
          />
        </Helmet>
      <ServiceNameContainer text="Wood & Plastics  Estimating services" />
      <HalfTextHalfImg text={text} scr={woodandPlastic1} />
      <ServiceNameContainer text="Wood Materials and Products" />
      <HalfTextHalfImg text={text2} scr={woodandPlastic2} />
      <ServiceNameContainer text="Benefits of Services" />
      <div className="container">
        <p className="paragraph">
          Discover the myriad benefits of our estimation service that sets us
          apart as your premier planning partner. With our accurate and
          comprehensive estimation data, you gain the power to plan projects
          with unwavering precision. Our data empowers you to allocate resources
          efficiently, optimize budgets, and avoid unforeseen costs. Whether
          you're a contractor, project manager, or architect, our service equips
          you with the insights needed to make informed decisions, streamline
          processes, and ensure project success. By utilizing our reliable
          estimation data, you embark on your projects with confidence, knowing
          that you have a solid foundation for effective planning and execution.
          Say goodbye to guesswork and welcome the era of data-driven project
          management with our unmatched estimation service.
        </p>
      </div>
      <div>
        <Banner text={text3} />
      </div>
      <BlueFooter />
    </div>
  );
};
