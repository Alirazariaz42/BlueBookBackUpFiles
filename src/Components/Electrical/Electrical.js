import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import electricalHTHI from "../../Assests/ElectricalHTHI.webp";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';

export const Electrical = () => {
  const text1 = (
    <>
      Serving clients across diverse sectors, our company delivers top-notch
      electrical estimation service. Recognizing the importance of reliable
      electrical cost projections for project success, we employ cutting-edge
      software and tools to produce these forecasts. Our skilled and seasoned
      electrical cost analysts consider every element of your project to provide
      a precise electrical cost estimate, encompassing materials, labor, and
      equipment expenses. At our foundation, we're committed to exceptional
      customer support and a meticulous attention to detail that distinguishes
      us. From this point, allow us to assist you in achieving your objectives
      through tailored electrical estimations designed to address each project's
      unique requirements.
    </>
  );
  const text4 = (
    <>
      For a quick quote based on your project scope, call us at +1-917-300-1079
      or email us at bluebookestimator@gmail.com
    </>
  );
  return (
    <div>
    <Helmet>
            <title>
            Electrical Takeoff:  Electrical Estimating Services
            </title>
            <meta
              name="description"
              content="We are providing comprehensive low-voltage instrumentation and electrical estimating services, encompassing fixture and equipment estimation."
            />
          </Helmet>
      <ServiceNameContainer text="Electrical Estimation Service" />
      <HalfTextHalfImg text={text1} scr={electricalHTHI} />
      <ServiceSubheadingContainer text="Electrical Takeoffs We Provide?" />

      <div className="row w-100 m-0 mt-md-4 mt-3 justify-content-center">
        <div
          className="col-md-4 col-12 p-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p className="paragrapg  ">
              <ul>
                <li>Building Management Systems</li>{" "}
                <li>Building Automation Systems</li> <li>Fittings</li>{" "}
                <li>Groundings</li>
                <li>Conduits</li> <li>Gears</li> <li>Panels</li>{" "}
                <li> Transistors</li>
                <li>Resistors</li> <li>Hangers & Supports</li>
              </ul>
            </p>
          </div>
        </div>
        <div
          className="col-md-4 col-12 p-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <p className="paragrapg  ">
                <ul>
                  <li>Communications Systems</li> <li>Receptacles </li>{" "}
                  <li>Conductors</li> <li>Diodes</li>
                  <li>Sensors</li> <li>Power Sources</li> <li>Feeders</li>{" "}
                  <li>Circuit Breakers</li>
                  <li>Fuses</li> <li>Fuse Blocks & Accessories </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-12 p-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <p className="paragrapg  ">
                <ul>
                  <li>Motor Controls</li> <li>Plates</li>{" "}
                  <li>Switchgear Panels</li> <li>Switches</li>
                  <li>Switchboards</li> <li>Cable Trays</li> <li>Wirings</li>{" "}
                  <li>Branch devices</li>
                  <li>Substations</li> <li>Low Voltage Devices</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServiceSubheadingContainer text="Electrical Takeoffs We Provide For All Sectors" />

      <div className="container mt-5">
        <p className="paragraph">
          {" "}
          Being in the MEP industry for many years, we have reached a point
          where we can say that our electrical estimating company can handle any
          type, size and complexity of the project from a variety of sector base
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
            <h4 className="headingStyling">Residential Electrical Takeoffs</h4>
            <p className="paragrapg mt-5">
              <ul>
                <li>Building Management Systems</li>{" "}
                <li>Building Automation Systems</li>{" "}
                <li>Fire Protection Systems</li>{" "}
                <li>Heating & Cooling Systems</li>
                <li>Ventilation Systems</li> <li>Security Systems</li>{" "}
                <li>Entertainment Systems</li> <li> Communication Systems</li>
                <li>Lighting & Control Systems</li>{" "}
                <li>Solar Electric Systems</li> <li>Generator Systems</li>{" "}
                <li>Doorbells & Intercoms</li>
                <li>Electric Receptacles</li>
              </ul>
            </p>
          </div>
        </div>
        <div button
          className="col-md-6 col-12 p-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <h4 className="headingStyling">Commercial Electrical Takeoffs</h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>Communications Systems</li>{" "}
                  <li>Power Generating Systems </li> <li>Chiller Systems</li>{" "}
                  <li>Electric Distribution systems</li>
                  <li>Geothermal Systems</li> <li>Solar Power Systems</li>{" "}
                  <li>Telecommunication systems</li>{" "}
                  <li>Emergency Alarm systems</li>
                  <li>Fire Protection Systems</li> <li>HVAC systems </li>{" "}
                  <li>Temperature Control</li> <li>Electronic Door Systems </li>
                  <li>Networking Systems</li>
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
              <h4 className="headingStyling">Industrial Electrical Takeoffs</h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>Automation Systems</li> <li>Lighting & Power Systems</li>{" "}
                  <li>Temperature Control Systems</li>{" "}
                  <li>Emergency Systems</li>
                  <li>Monitoring Systems</li>{" "}
                  <li>Power Distribution Systems</li>{" "}
                  <li>Robotics & Assembly Systems</li>{" "}
                  <li>Motion Control Systems</li>
                  <li>PLC Systems</li>{" "}
                  <li>Instrumentation & Process Control Systems</li>{" "}
                  <li>Geothermal Systems</li>{" "}
                  <li>Turnkey Integrated Systems</li>
                  <li>Solar Photovoltaic Systems</li>{" "}
                  <li>Wind Energy Systems</li> <li>Generator Paralleling</li>{" "}
                  <li>Uninterruptible Power Supplies</li>
                  <li>Co-generation & Microgrids</li>
                  <li>Material Handling Systems</li>
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
                Low Voltage Electrical Takeoffs
              </h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>Access Control</li> <li>Fire Alarm</li>{" "}
                  <li>Nurse Call</li> <li>Telephone</li>
                  <li>Audio & Video</li> <li>Intercom</li> <li>Doorbells</li>{" "}
                  <li>Network Data</li>
                  <li>Security Sensors</li> <li>Thermostats</li>{" "}
                  <li>Wireless Clocks</li> <li>Landscape Lighting</li>
                  <li>Wireless Connectivity</li> <li>Intrusion Detection</li>{" "}
                  <li>Structured Cabling</li> <li>Fire Protection</li>{" "}
                  <li>Garage Door Openers</li> <li>CCTV Surveillance</li>
                  <li>Mass notification</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Sample_and_Uploads/>
      <BlueFooter />
    </div>
  );
};
