import React from "react";

import "../Material_TakeOff/Material_TakeOff.css";
export const HalfImgHalfText = (props) => {
  return (
    <div>
      <div
        className="row w-100 p-lg-4 p-md-4 p-2 m-0"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="col-lg-6 col-12 text-center">
          <img src={props.source} alt="image" className="imageSize" />
        </div>
        <div className="col-lg-6 col-12">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
