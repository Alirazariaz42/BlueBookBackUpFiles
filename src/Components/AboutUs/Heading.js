import React from "react";
import "./AboutUs.css";
export const Heading = (props) => {
  return (
    <div>
      <h1 className="Headings text-center">
        <u> {props.children}</u>
      </h1>
    </div>
  );
};
