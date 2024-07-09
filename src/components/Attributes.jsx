import React from "react";

const Attributes = ({ attributeValues, handleAttributeValues }) => {
  return (
    <div className="attributes-container">
      <h1>Attributes</h1>
      {Object.keys(attributeValues).map((attribute) => (
        <div key={attribute} className="attribute-values">
          {attribute}: {attributeValues[attribute]} (Modifier:
          {Math.floor((attributeValues[attribute] - 10) / 2)})
          <button
            className="attribute-btn"
            onClick={(e) => {
              handleAttributeValues(e.target.innerText, attribute);
            }}
          >
            +
          </button>
          <button
            className="attribute-btn"
            onClick={(e) => {
              handleAttributeValues(e.target.innerText, attribute);
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
