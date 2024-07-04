import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";
import Attributes from "./components/Attributes.jsx";

function App() {
  const [attributeValues, setAttributeValues] = useState(attributesObj());

  function attributesObj() {
    let obj = {};
    ATTRIBUTE_LIST.forEach((value) => (obj[value] = 0));
    return obj;
  }

  const hanndleAttributeValues = (e, attribute) => {
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
                hanndleAttributeValues={hanndleAttributeValues}
                setAttributeValues={setAttributeValues}
              />

              <div className="classes">
                <h1>Classes</h1>
              </div>
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
