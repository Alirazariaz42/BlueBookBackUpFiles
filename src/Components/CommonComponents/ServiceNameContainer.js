import React from "react";
import './commonComponentstyle.css'
export const ServiceNameContainer = (props) => {
  return (
    <>
      <div className="ServiceNameContainer mt-5 mb-5">
        <h3>{props.text}</h3>
      </div>
    </>
  );
};
