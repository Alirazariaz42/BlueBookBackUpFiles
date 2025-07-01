import React from "react";
import "./DoorsandWindows.css";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import doorsANDWindows from "../../Assests/doorandWindows.png";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads';
import frame1 from "../../Assests/f1.webp"
import frame2 from "../../Assests/f2.webp"
import frame3 from "../../Assests/f3.webp"
import frame4 from "../../Assests/f4.webp"
import { Helmet } from 'react-helmet';
import BlueFooter from "../CommonComponents/BlueFooter/BlueFooter";

export const DoorsandWindows = () => {
  const text3 = (
    <>
      For a quick quote based on your project scope, call us at +1-917-300-1079
      or email us at bluebookestimator@gmail.com
    </>
  );
  const text = (
    <>
      Building endeavors necessitate a framing takeoff to determine the amount
      of lumber or wood consumption. Projections for wooden beams, floor joists,
      wall studs, knee wall structures, trim joists, and lumber comprise the
      estimation Service. Consequently, framing contractors are crucial in
      construction since they establish the edifice's skeletal framework. The
      profitability of framing contractors hinges on a constant flow of
      recurring projects and meticulous expense management.
    </>
  );
  return (
    <div>
      <Helmet>
          <title>
          Doors & Windows Estimating Services: The BlueBook Estimators
          </title>
          <meta
            name="description"
            content="Get accurate doors & windows estimating services. Plan confidently with The BlueBook Estimators reliable pricing and expert guidance."
          />
        </Helmet>
      <ServiceNameContainer text="Doors & Windows Estimation" />
      <HalfTextHalfImg text={text} scr={doorsANDWindows} />
      <ServiceSubheadingContainer text="HOW TO  ESTIMATE A FRAMING TAKEOFF" />
      <div className="container">
        <p className="paragraph mt-5">
          The framing takeoff is a critical step in the construction process
          because it determines the type and amount of lumber you need for your
          structure. The takeoff is based on the blueprints for your project and
          includes the dimensions of all the framing members, such as studs,
          joists, and rafters.
        </p>

        <div className="row w-100 m-0 mt-5 justify-content-center">
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
             
            }}
          >
            <div>
              <h4 className="headingStyling">ESTIMATING FARAMING TAKEOFF</h4>
              <p className="paragrapg mt-5">
                The initial stage in approximating your framing takeoff involves
                conducting takeoffs based on a collection of construction
                blueprints or designs.
              </p>
              <div className="doorWindowimgContainer p-4">
                {" "}
                <img src={frame1} />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              
            }}
          >
            <div>
              <div>
                <h4 className="headingStyling">A ROUGH PLAN/SKETCH</h4>
                <p className="paragrapg mt-5">
                  You can compute these using basic arithmetic. Firstly, measure
                  the wall length in feet and multiply it by 0.75.
                </p>
                <div className="doorWindowimgContainer p-4">
                  {" "}
                  <img src={frame2} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
              
            }}
          >
            <div>
              <div>
                <h4 className="headingStyling">
                  CALCULATE THE NUMBER OF STUDS
                </h4>
                <p className="paragrapg mt-5">
                  For regular door sizes and windows, the header materials are
                  built with two 2x12 timber pieces between a half-inch thick
                  plywood cut to the same size as the header.
                </p>
                <div className="doorWindowimgContainer p-4">
                  {" "}
                  <img src={frame3} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-12 p-4"
            style={{
              display: "flex",
              justifyContent: "center",
             
            }}
          >
            <div>
              <div>
                <h4 className="headingStyling">ESTIMATE THE HEADER MATERIAL</h4>
                <p className="paragrapg mt-5">
                  The following phase entails identifying the required support
                  plates for the walls. For load-bearing walls, considering
                  single bottom or dual top plates is wise. Including a 5 to 10%
                  waste proportion for these plates is strongly suggested.
                </p>
                <div className="doorWindowimgContainer p-4">
                  {" "}
                  <img src={frame4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ServiceSubheadingContainer text="IMPROVING YOUR FRAMING TAKEOFF" />
      </div>
      <div className="container mt-4">
        <p
          className="p-lg-4 p-3 paragraph text-center"
          style={{ fontWeight: "700" }}
        >
          A good framing takeoff does not necessarily give you the best material
          use. You can ensure proper material usage by reducing wastage. For
          instance, if you need 2x6 floor joists, you can buy 12-foot-long studs
          and cut them in half instead of 8-foot studs that will have a two-foot
          wastage per joist. For seven-foot rear walls, you can get two seven
          feet studs from fourteen-foot studs instead of cutting a foot off from
          eight-foot studs. This will reduce your wastage on-site drastically.
        </p>
      </div>
      <Sample_and_Uploads/>
      <BlueFooter />
    </div>
  );
};
