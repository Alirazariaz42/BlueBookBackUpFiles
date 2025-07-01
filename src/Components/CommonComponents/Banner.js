import React, { useState } from "react";
 

import "../Material_TakeOff/Material_TakeOff.css";

import elips5 from "../../Assests/Ellipse 5.png";
import elips6 from "../../Assests/Ellipse 6.png";
import BlueUploadModal from "./BlueUploadModal/BlueUploadModal";
export const Banner = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ChangeModelState = ()=>{

    setIsModalOpen(!isModalOpen)
  }
  return (
    <div>
      {" "}
      <div className="bannercontainerBG mt-lg-4 mb-lg-4">
        <div className="row w-100 BannerFlex_center" >
          <div className="col-lg-7 col-md-8 col-12">
            <p>{props.text}</p>
           
          </div>
          <div className="col-lg-2 col-md-1 col-0"></div>
          <div className="col-lg-3 col-md-3 col-12 text-center">
            <button className="PlansBtn" onClick={ChangeModelState}>
              <span className="Upload">Upload your</span>
              <span className="plans"> Plans</span>
            </button>
            <div className="mt-2 ">
              
                <img src={elips5} className="PlanUploadImgs" alt="" />
            
                <img src={elips6} className="PlanUploadImgs" alt="" />
             
            </div>
          </div>
        </div>
      </div>
      <BlueUploadModal   isModalOpen={isModalOpen}   setIsModalOpen={setIsModalOpen}></BlueUploadModal>
    </div>
  );
};
