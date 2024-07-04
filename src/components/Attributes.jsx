import React from "react";

const Attributes = ({ attributeValues, hanndleAttributeValues }) => {
  return (
    <div className="attributes-container">
      <h1>Attributes</h1>
      {Object.keys(attributeValues).map((attribute) => (
        <div key={attribute} className="attribute">
          <p>{attribute}:</p>
          <p> {attributeValues[attribute]}</p>
          <button
            onClick={(e) => {
              hanndleAttributeValues(e.target.innerText, attribute);
            }}
          >
            +
          </button>
          <button
            onClick={(e) => {
              hanndleAttributeValues(e.target.innerText, attribute);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
