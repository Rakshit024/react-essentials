import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  
  // console.log(EXAMPLES[0].title)
  return (
    <>
      <Header title="title1" name="name1" />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
export default App;
