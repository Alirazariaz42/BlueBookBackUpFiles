import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import EquipmentHTHI1 from "../../Assests/EquipmentHTHI1.webp";
import EquipmentHTHI2 from "../../Assests/EquipmentHTHI2.webp";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';

export const Equipment = () => {
  const text1 = (
    <>
      The BlueBook Estimators are your dependable source for all-inclusive
      equipment estimation service. Our mission is to supply you with precise
      and current details to aid your project preparation and financial planning
      requirements. Our equipment estimation data spans an extensive array of
      industries and sectors, presenting invaluable understanding into diverse
      types of equipment necessary for triumphant project completion.
    </>
  );
  const text2 = (
    <>
      Are you looking to spruce up your living space but need to know the cost?
      Let us help you with a home furnishing estimation! Our team of experts can
      accurately estimate the cost of furnishing your home based on your
      specific needs and preferences. The size of your house, the type and
      quality of furniture you choose, and any customizations you may want are
      all considered by our home furnishing cost estimator. As everyone has
      different interests and spending limits, we collaborate with you to create
      a customized estimate that satisfies your needs.
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
            The BlueBook Estimators: Equipment Estimating Services    
            </title>
            <meta
              name="description"
              content="The BlueBook Estimators provides the best equipment estimating services. Our appraisal services ensure fair market value assessments for all your assets."
            />
          </Helmet>
      <ServiceNameContainer text="Equipment" />
      <HalfTextHalfImg text={text1} scr={EquipmentHTHI1} />
      <ServiceNameContainer text="Construction Equipment" />
      <div className="container">
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
              <h4 className="headingStyling">Earthmoving Machinery</h4>
              <p className="paragrapg mt-5">
                Diggers, dozers, loading machines, and leveling devices. Renting
                or buying expenses, energy usage, and upkeep factors.
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
                <h4 className="headingStyling">
                  Concrete and Paving Equipment
                </h4>
                <p className="paragrapg mt-5">
                  Cement mixers, paving machines, concrete pumps. Expenses for
                  equipment utilization, related tools, and workforce hours.
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
                <h4 className="headingStyling">Cranes and Lifting Equipment</h4>
                <p className="paragrapg mt-5">
                  Crane types: tower, mobile, overhead. Price or hire determined
                  by load ability, installation necessities, and protective
                  protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceNameContainer text="Manufacturing and Industrial Equipment" />
      <div className="container">
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
              <h4 className="headingStyling">
                Machinery and Production Equipment
              </h4>
              <p className="paragrapg mt-5">
                CNC milling machines, lathes, presses, and industrial equipment.
                Expenses for acquiring machinery, operating costs, and upkeep.
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
                <h4 className="headingStyling">Material Handling Equipment</h4>
                <p className="paragrapg mt-5">
                  Pallet trucks, belts, mechanized transporters. Projections for
                  apparatus expenses, weight limits, and personnel for
                  utilization and upkeep.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <Sample_and_Uploads/>
      <BlueFooter />
    </div>
  );
};
