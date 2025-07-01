import React from "react";
import "./AboutUs.css";
export const KeyFeacurres = (props) => {
  return (
    <React.Fragment>
      <div className="FearureContainer m-lg-5 m-3">
        
          <svg
          className="check_SVG_Container"
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 100 100"
            fill="none"
          >
            <g clip-path="url(#clip0_122_136)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50 0C77.5958 0 100 22.4042 100 50C100 77.5958 77.5958 100 50 100C22.4042 100 0 77.5958 0 50C0 22.4042 22.4042 0 50 0ZM50 4.16667C75.2958 4.16667 95.8333 24.7042 95.8333 50C95.8333 75.2958 75.2958 95.8333 50 95.8333C24.7042 95.8333 4.16667 75.2958 4.16667 50C4.16667 24.7042 24.7042 4.16667 50 4.16667ZM79.1667 35.2375L41.6458 75.0917L20.8333 50.6542L24.0042 47.95L41.8 68.85L76.1333 32.3833L79.1667 35.2375Z"
                fill="#337AB7"
              />
            </g>
            <defs>
              <clipPath id="clip0_122_136">
                <rect width="100" height="100" rx="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        
        <div className="FeactureData">
            <h4>{props.FeatureHeadibg}</h4>
            <p className="p-0"> {props.children} </p>
          </div>
      </div>
    </React.Fragment>
  );
};
