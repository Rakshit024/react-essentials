import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TapButton from "./components/TapButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  // console.log(EXAMPLES[0].title)
  function handleSelect(seletedButton) {
    setSelectedTopic(seletedButton);
    console.log(`selectedTopic - ${selectedTopic}`);
  }
  return (
    <div>
      <Header title="title1" name="name1" />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
            {/* SPREAD OPERATOR SPREADS THE CORE_CONCEPTS DATA AS PROPS */}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect("components")}>
              Component
            </TapButton>
            <TapButton onSelect={() => handleSelect("jsx")}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect("props")}>Props</TapButton>
            <TapButton onSelect={() => handleSelect("state")}>State</TapButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
export default App;
