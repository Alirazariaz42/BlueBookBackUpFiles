import React from "react";
import "./commonComponentstyle.css";
export const CommonCard = (props) => {
  return (
    <div>
      <div className="cardcontainer">
        <div className="cartTextContainer" style={{display:"flex", alignItems:'center'}}>
          <div>
          <h4>{props.heading}</h4>
          <p>
            {props.paragraph}
          </p>
        </div>
        </div>
        <div className="cardBgStyle"></div>
      </div>
    </div>
  );
};
