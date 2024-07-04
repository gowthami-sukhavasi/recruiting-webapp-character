import React from "react";
import { CLASS_LIST } from "../consts";

const Classes = ({ classMatch, setDisplayClass }) => {
  console.log(classMatch);
  return (
    <div className="classes">
      <h1> Classes </h1>
      {Object.keys(CLASS_LIST).map((classValue, index) => (
        <div key={index}>
          <p
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
