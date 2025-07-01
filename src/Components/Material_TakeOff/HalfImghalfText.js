import React from "react";

export const HalfImghalfText = (props) => {
  return (
    <div>
      <div
        className="row w-100 p-lg-4 p-md-4 p-2"
        style={{ display: "flex", alignItems: "center", margin:"0px" }}
      >
        <div className="col-lg-6 col-12 text-center">
          <img src={props.scr} alt="image" className="Construction_SoftwareimageSize" />
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center mt-3">
            {" "}
            <button className="btnConstruction "> Construction Software</button>
          </div>
          <p className="p-lg-3 p-md-3 p-2">{props.text1}</p>
          <div className="text-center mt-3">
            {" "}
            <button className="btnConstruction "> TAKE-OFF FORMAT</button>
          </div>
          <p className="p-lg-3 p-md-3 p-2">{props.text2}</p>
        </div>
      </div>
    </div>
  );
};
