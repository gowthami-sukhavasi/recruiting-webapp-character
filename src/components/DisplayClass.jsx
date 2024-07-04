import React from "react";
import { CLASS_LIST } from "../consts";

const DisplayClass = ({ displayClass, setDisplayClass }) => {
  console.log(displayClass);

  return (
    <div>
      <h2>
        {displayClass}
        <span> Minimum Requirements</span>
      </h2>
      {Object.keys(CLASS_LIST[displayClass]).map((attribute) => (
        <div>
          {attribute}: {CLASS_LIST[displayClass][attribute]}
        </div>
      ))}
      <button
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
