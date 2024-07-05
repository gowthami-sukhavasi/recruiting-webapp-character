import React from "react";
import { CLASS_LIST } from "../consts";

const DisplayClass = ({ displayClass, setDisplayClass }) => {
  return (
    <div className="display-class-container">
      <h2 className="display-heading">
        {displayClass}
        <span> Minimum Requirements</span>
      </h2>
      {Object.keys(CLASS_LIST[displayClass]).map((attribute) => (
        <div key={attribute}>
          {attribute}: {CLASS_LIST[displayClass][attribute]}
        </div>
      ))}
      <button
        className="display-btn"
        onClick={() => {
          setDisplayClass([]);
        }}
      >
        Close Values
      </button>
    </div>
  );
};

export default DisplayClass;
