import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import GeneralRequirementsPic from "../../Assests/GeneralRequirementPic.webp";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";
import { Helmet } from "react-helmet";
import "./GeneralRequirements.css";
export const GeneralRequirements = () => {
  const text = (
    <>
      The costs tied to General Conditions and General Requirements play a vital
      role in the overall expense of a Construction Project. General Conditions
      offer a high-level perspective and a wide understanding of the client's
      expected project management, while General Requirements supply a more
      detailed breakdown of the client's demands and conditions regarding the
      project. General Conditions encompass the segment of the Contract Document
      where the relationships, rights, and responsibilities of both parties
      involved are explicitly clarified and established. This section addresses
      Handling Requirements, Storage of Materials, and Standards for Product
      Distribution.
    </>
  );
  const text2 = (
    <>
      For a quick quote based on your project scope, call us at +1-917-300-1079
      or email us at bluebookestimator@gmail.com
    </>
  );

  return (
    <div>
      <Helmet>
        <title>The BlueBook Estimators: General Requirements Overview</title>
        <meta
          name="description"
          content="Streamline construction estimating with The BlueBook Estimators. Achieve accuracy and cost control effortlessly for project success."
        />
      </Helmet>
      <ServiceNameContainer text="General Requirements " />
      <div className="container-fluid">
        <HalfTextHalfImg text={text} scr={GeneralRequirementsPic} />
      </div>

      <div className="container">
        <ul
          class="nav nav-pills mb-3"
          id="pills-tab"
          role="tablist"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <li class="nav-item" role="presentation">
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
              Administrative Requirements
            </button>
          </li>
          <li class="nav-item" role="presentation">
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
              Quality Requirements
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Product Requirements
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active text-center"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            This section deals with Project Coordination, Project Management,
            Documenting the Construction Progress such as the Architectural
            Supplies, Architectural Services and Schedules for Network Analysis,
            Special Procedures and Submittal Procedures. Project Coordination
            further constitutes of details regarding Contract Coordination and
            Project Meetings.
          </div>
          <div
            class="tab-pane fade text-center"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            This segment encompasses Examining Solutions and Analyzing
            Solutions, along with the integration of Laboratory Solutions.
          </div>
          <div
            class="tab-pane fade text-center"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            This portion covers Handling Necessities, Storing Products, and
            Expectations for Product Distribution.
          </div>
        </div>
      </div>
      <h4 className="Facilities_and_Controls">
        Temporary Facilities and Controls
      </h4>
      <div className="container">
        <div className="row w-100 justify-content-center">
          <div
            className="col-lg-3 col-sm-6 col-12 pt-3 pb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="imgcontainer imgcontainer1">
              <div className="ImgCardContainer">
                <p>Ventilating</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-sm-6 col-12 pt-3 pb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="imgcontainer imgcontainer2">
              <div className="ImgCardContainer">
                <p>Cooling</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-sm-6 col-12 pt-3 pb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="imgcontainer imgcontainer3">
              <div className="ImgCardContainer">
                <p>Heating</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-sm-6 col-12 pt-3 pb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="imgcontainer imgcontainer4">
              <div className="ImgCardContainer">
                <p>Lighting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Sample_and_Uploads />
      <BlueFooter />
    </div>
  );
};
