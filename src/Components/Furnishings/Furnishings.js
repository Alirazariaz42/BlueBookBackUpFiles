import React from "react";
import { ServiceNameContainer } from "../CommonComponents/ServiceNameContainer";
import { Banner } from "../CommonComponents/Banner";
import { BlueFooter } from "../CommonComponents";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import FurnishingHTHI1 from "../../Assests/FurnishingHTHI1.webp";
import FurnishingHTHI2 from "../../Assests/FurnishingHTHI2.webp";
import {Sample_and_Uploads} from '../CommonComponents/Sample_and_Uploads'
import { Helmet } from 'react-helmet';


export const Furnishings = () => {
  const text1 = (
    <>
      Every building or renovation project necessitates the use of furnishing
      estimation services. These include the precise evaluation and estimation
      of the expense of materials, labor force, and other costs crucial for
      outfitting a site. This estimation assists clients in budgeting, making
      well-informed choices, and guaranteeing that the project is accomplished
      within the designated resources.
      <br />
      Digital assessment provides computation for: Cement Countertops, Rock
      Countertops, Synthetic Laminates, Timber Countertops, Refined Marble,
      Dense Surfaces, Crystal Countertops, Ceramic, Laboratory Countertops,
      Custom Sink and countertop configurations
    </>
  );
  const text2 = (
    <>
      Considering a makeover for your living space and curious about the costs?
      Let us help you with a home furnishing estimation! Our skilled team can
      accurately assess the expense of furnishing your home based on your
      specific needs and preferences. We consider the dimensions of your
      property, the style and quality of the furniture you choose, and any
      customizations you may desire. Understanding that each person has unique
      priorities and financial limitations, we collaborate to create a
      customized estimation that fulfills your expectations.
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
            The BlueBook Estimators: Furnishing Estimating Services
            </title>
            <meta
              name="description"
              content="Get precise furnishings estimating services with The BlueBook Estimators. Plan your budget confidently for home or office décor projects. Try it now!"
            />
          </Helmet>
      <ServiceNameContainer text="Furnishings" />
      <HalfTextHalfImg text={text1} scr={FurnishingHTHI1} />
      
      <ServiceNameContainer text="Home Furnishing Estimation Services" />
      <HalfTextHalfImg text={text2} scr={FurnishingHTHI2} />
     
     <Sample_and_Uploads/>
      <BlueFooter />
    </div>
  );
};
