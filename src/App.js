import { useState, useEffect } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import Attributes from "./components/Attributes.jsx";
import Classes from "./components/Classes.jsx";
import DisplayClass from "./components/DisplayClass.jsx";

function App() {
  const [attributeValues, setAttributeValues] = useState(attributesObj());
  const [classMatch, setClassMatch] = useState([]);
  const [displayClass, setDisplayClass] = useState([]);

  useEffect(() => {
    const newClassMatch = [];

    Object.keys(CLASS_LIST).forEach((classlistName) => {
      let count = 0;

      Object.keys(CLASS_LIST[classlistName]).forEach((attribute) => {
        if (
          attributeValues[attribute] >= CLASS_LIST[classlistName][attribute]
        ) {
          count += 1;
        }
      });

      if (count === 6) {
        newClassMatch.push(classlistName);
      }
    });

    setClassMatch(newClassMatch);
  }, [attributeValues]);

  function attributesObj() {
    let obj = {};
    ATTRIBUTE_LIST.forEach((value) => (obj[value] = 0));
    return obj;
  }

  const handleAttributeValues = (e, attribute) => {
    if (e === "+") {
      setAttributeValues((prev) => ({
        ...prev,
        [attribute]: attributeValues[attribute] + 1,
      }));
    }
    if (e === "-") {
      setAttributeValues((prev) => ({
        ...prev,
        [attribute]: attributeValues[attribute] - 1,
      }));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          <div className="character-container">
            Character: 1<div className="skill-check">Skill DC Roll</div>
            <div className="game-container">
              <Attributes
                attributeValues={attributeValues}
                handleAttributeValues={handleAttributeValues}
                setAttributeValues={setAttributeValues}
              />
              <Classes
                classMatch={classMatch}
                displayClass={displayClass}
                setDisplayClass={setDisplayClass}
              />
              {displayClass.length !== 0 && (
                <DisplayClass
                  displayClass={displayClass}
                  setDisplayClass={setDisplayClass}
                />
              )}

              <div className="skills">
                <h1>Skills</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
