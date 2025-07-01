import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import SpecialitiesHTHI from "../../Assests/Specialities.webp";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';

export const Specialities = () => {
  const text = (
    <>
      The BlueBook Estimators are the leading resource for all-inclusive
      specialty estimation details. We acknowledge the vital role specialty
      components play in numerous projects, and our database is tailored to
      offer precise information for efficient planning and budgeting. Our
      specialty estimation data is structured into these main categories:
    </>
  );
  return (
    <div>
    <Helmet>
            <title>
            The BlueBook Estimators: Specialties in Construction Estimating  
            </title>
            <meta
              name="description"
              content="We are providing specialized construction cost guides. Accurate pricing for various specialties in the construction industry. Plan your projects confidently."
            />
          </Helmet>
      <ServiceNameContainer text="Specialties" />
      <HalfTextHalfImg text={text} scr={SpecialitiesHTHI}></HalfTextHalfImg>
      <ServiceNameContainer text="Architectural Specialties" />
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
            <h4 className="headingStyling">Interior Finishes</h4>
            <p className="paragrapg mt-5">
              <ul>
                <li>
                  Breakdown of costs for flooring materials (tiles, hardwood,
                  carpet).
                </li>
                <li>
                  Estimation of wall finishes (paint, wallpaper, decorative
                  panels).
                </li>
                <li>
                  Details on ceiling treatments, including suspended ceilings
                  and acoustic panels.stems
                </li>
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
              <h4 className="headingStyling">Cabinetry and Millwork</h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>
                    List of custom cabinets, shelves, and built-in furniture
                  </li>{" "}
                  <li>
                    Cost estimates based on material choices (wood, laminate,
                    etc.).
                  </li>
                  <li>
                    Labor hours for installation, including precise measurements
                    and joinery.
                  </li>
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
              <h4 className="headingStyling">Architectural Lighting</h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>
                    Data on specialized lighting fixtures (chandeliers, sconces,
                    pendant lights).
                  </li>
                  <li>Estimation of lighting design and installation costs.</li>
                  <li>
                    Consideration of energy-efficient and smart lighting
                    options.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServiceNameContainer text="Environmental and Sustainable Solutions" />
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
            <h4 className="headingStyling">Green Building Materials</h4>
            <p className="paragrapg mt-5">
              <ul>
                <li>
                  Breakdown of eco-friendly materials (recycled, reclaimed,
                  etc.).
                </li>
                <li>
                  Cost estimates for sustainable alternatives to conventional
                  materials.
                </li>
                <li>Information on LEED certification and associated costs.</li>
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
              <h4 className="headingStyling">Energy Efficiency Upgrades</h4>
              <p className="paragrapg mt-5">
                <ul>
                  <li>Data on insulation, windows, and HVAC improvements.</li>{" "}
                  <li>Estimation of costs and energy savings potential.</li>
                  <li>
                    Analysis of incentives and rebates for energy-efficient
                    solutions.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <p className="paragraph">
          Our specialist's projections are regularly updated to reflect current
          trends, technological advancements, and pricing fluctuations. Whether
          managing construction endeavors, adopting sustainable practices,
          enhancing tech integration, or prioritizing health and safety, our
          insights equip you with the knowledge needed to make well-informed
          decisions, allocate resources efficiently, and guarantee the success
          of your specific initiatives.
        </p>
      </div>
      <Sample_and_Uploads/>      <BlueFooter />
    </div>
  );
};
