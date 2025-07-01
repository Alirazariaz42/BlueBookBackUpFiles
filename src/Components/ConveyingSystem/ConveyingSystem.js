import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import ConveyingSystemHTHI1 from "../../Assests/ConceySystemHTHI1.webp";
import ConveyingSystemHTHI2 from "../../Assests/ConceySystemHTHI2.webp";
import ConveyingSystemHTHI3 from "../../Assests/ConceySystemHTHI3.webp";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';

export const ConveyingSystem = () => {
  const text1 = (
    <>
      Every construction or remodeling endeavor requires accurate furnishing
      estimation services. These include the meticulous assessment and
      approximation of the expenses related to materials, workforce, and other
      fees essential for providing a location. This estimation aids clients in
      budget preparation, decision-making, and ensuring that the project is
      carried out within the allocated resources.
    </>
  );
  const text2 = (
    <>
      Looking to revamp your living area yet curious about the expenses? Allow
      our team to assist you with a home furnishing estimation! Our skilled
      professionals can precisely calculate the cost of furnishing your
      residence based on your distinctive requirements and tastes. Your home's
      size, the furniture's style and quality, as well as any personalizations
      you may desire are all taken into account by our home furnishing cost
      estimator. Recognizing that everyone has unique interests and budgetary
      constraints, we work together with you to develop a tailored estimate that
      fulfills your desires.
    </>
  );
  const text3 = (
    <>
      Looking to revamp your living area and curious about the expenses? Allow
      us to assist you with a home furnishing estimate! Our skilled
      professionals can precisely calculate the cost of outfitting your
      residence based on your unique requirements and tastes. Factors such as
      your home's dimensions, the variety and caliber of furniture selected, and
      any personalizations you may desire are all taken into account by our home
      furnishing cost estimator. Understanding that everyone has distinct
      preferences and budget constraints, we work closely with you to develop a
      tailored estimate that fulfills your expectations.
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
            Efficient Conveying Systems: The BlueBook Estimators
            </title>
            <meta
              name="description"
              content="Explore advanced conveying systems with The BlueBook Estimators. Optimize 
              efficiency and effective in material handling. Get accurate cost estimates today.
              "
            />
          </Helmet>
      <ServiceNameContainer text="Conveying Systems" />
      <HalfTextHalfImg text={text1} scr={ConveyingSystemHTHI1} />
      <ServiceNameContainer text="Elevators" />
      <HalfTextHalfImg text={text2} scr={ConveyingSystemHTHI2} />

      <ServiceNameContainer text="Wheelchair Lifts" />
      <HalfTextHalfImg text={text3} scr={ConveyingSystemHTHI3} />

      <ServiceNameContainer text="Laundry Chute" />
      <div className="container">
        <p className="paragraph">
          Looking for a precise quote for your bedroom furniture needs? Search
          no further than our furniture cost estimators! Utilizing cutting-edge
          algorithms and market insights, we can assist you in determining the
          expense of your bedroom furniture, guaranteeing you receive top value
          for your investment. Don't approach your makeover or upgrade
          uninformed – allow our professionals to steer you in the right
          direction. Click today to calculate the expense of furnishing a home,
          and begin crafting the ideal bedroom you've always desired!
        </p>
      </div>
      <Sample_and_Uploads/>
      <BlueFooter />
    </div>
  );
};
