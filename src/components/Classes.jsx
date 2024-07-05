import React from "react";
import { CLASS_LIST } from "../consts";

const Classes = ({ classMatch, setDisplayClass }) => {
  return (
    <div className="classes-container">
      <h1> Classes </h1>
      {Object.keys(CLASS_LIST).map((classValue, index) => (
        <div key={index}>
          <p
            className="classes-name"
            onClick={(e) => {
              setDisplayClass(e.target.textContent);
            }}
          >
            {classMatch?.includes(classValue)
              ? classValue.toUpperCase()
              : classValue}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Classes;
