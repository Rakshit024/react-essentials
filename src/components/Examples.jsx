import { useState } from "react";
import TapButton from "./TapButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(seletedButton) {
    setSelectedTopic(seletedButton);
    console.log(`selectedTopic - ${selectedTopic}`);
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TapButton
          isSelected={selectedTopic == "components" ? true : false}
          onSelect={() => handleSelect("components")}
        >
          Component
        </TapButton>
        <TapButton
          isSelected={selectedTopic == "jsx" ? true : false}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TapButton>
        <TapButton
          isSelected={selectedTopic == "props" ? true : false}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TapButton>
        <TapButton
          isSelected={selectedTopic == "state" ? true : false}
          onSelect={() => handleSelect("state")}
        >
          State
        </TapButton>
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
    </Section>
  );
}
