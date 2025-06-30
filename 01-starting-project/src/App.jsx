import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Todos from './components/Todos.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <Todos />
        {/* another approach to rendering conditionally */}
        {/* {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
        {/* another approach to rendering conditionally */}
        {/* {!selectedTopic && <p>Please select a topic</p>}{' '}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
      </main>
    </>
  );
}

export default App;
