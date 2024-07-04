import React from "react";
import { CLASS_LIST } from "../consts";

const Classes = ({ classMatch }) => {
  console.log(classMatch);
  return (
    <div className="classes">
      <h1> Classes </h1>
      {Object.keys(CLASS_LIST).map((classValue, index) => (
        <div key={index}>
          <p>
            {classMatch?.includes(classValue)
              ? classValue.toUpperCase()
              : classValue.toLowerCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Classes;
