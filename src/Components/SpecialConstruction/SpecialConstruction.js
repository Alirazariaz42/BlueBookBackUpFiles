import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import SpecialConstuctionHTHI1 from "../../Assests/SpeciaqlConstuctionHTHI1.webp";
import SpecialConstuctionHTHI2 from "../../Assests/SpeciaqlConstuctionHTHI2.webp";
import SpecialConstuctionHTHI3 from "../../Assests/SpeciaqlConstuctionHTHI3.webp";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { ServiceSubheadingContainer } from "../CommonComponents/ServiceSubheadingContainer";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { Sample_and_Uploads } from "../CommonComponents/Sample_and_Uploads";
import { Helmet } from 'react-helmet';

export const SpecialConstruction = () => {
  const text1 = (
    <>
      The BlueBook estimators are your top destination for specialized
      construction estimation information. Our unwavering attention to unique
      construction aspects guarantees that you possess the essential data to
      strategize and budget efficiently for specific and complex project needs.
      Our special construction estimation information covers an extensive
      variety of categories, each tailored to meet the particular requirements
      of your projects.
    </>
  );
  const text2 = (
    <>
      Pre-Fabricated Steel Structures, commonly known as PFSS, represent the
      cutting-edge answer for streamlined and budget-friendly building. These
      constructions are carefully planned and created off-site, enabling quick
      on-location assembly. PFSS boast remarkable adaptability and can be
      tailored to fit a variety of industrial, commercial, and agricultural
      needs.
    </>
  );
  const text3 = (
    <>
      Your ultimate resource for extensive statistics on detection and alarm
      systems. We recognize the crucial significance of trustworthy detection
      and alarm methods for a range of safety and security requirements.
    </>
  );
  return (
    <div>
    <Helmet>
            <title>
            Special Construction Estimating Services
            </title>
            <meta
              name="description"
              content="We provide precise cost estimates for special construction projects. Streamline your budgeting and planning for unique building needs."
            />
          </Helmet>
      <ServiceNameContainer text="Special Construction" />
      <HalfTextHalfImg text={text1} scr={SpecialConstuctionHTHI1} />
      <ServiceNameContainer text="Pre-Engineered Metal Building" />
      <HalfTextHalfImg text={text2} scr={SpecialConstuctionHTHI2} />
      <ServiceNameContainer text="Detection and Alarm" />
      <HalfTextHalfImg text={text3} scr={SpecialConstuctionHTHI3} />
      <ServiceNameContainer text="Fire Suppression" />
      <div className="container">
        <p className="paragraph mt-4">
          The ultimate source for precise and all-encompassing fire suppression
          system estimation data. We recognize the crucial significance of
          efficient fire suppression in safeguarding lives and property. Our
          platform delivers an abundance of information on diverse fire
          suppression systems to support you in strategizing and allocating
          funds for safety. From wet sprinkler systems that quickly react to
          fires with water, to dry and pre-action systems crafted for
          specialized settings, our estimation data imparts understanding into
          system elements, installation expenses, and upkeep factors. Whether
          you're overseeing a commercial establishment, industrial plant, or
          residential community, our fire suppression estimation data furnishes
          you with the wisdom required to make well-informed choices, distribute
          resources effectively, and ensure the highest protection against fire
          risks.
        </p>
      </div>
      <Sample_and_Uploads /> <BlueFooter />
    </div>
  );
};
