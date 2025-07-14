import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";


export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItems) => (
          <CoreConcept {...conceptItems} key={conceptItems.title} />
        ))}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
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
  );
}
