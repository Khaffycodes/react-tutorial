import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';

function App() {
  return (
    <div>
      {/* <MainGoal /> */}
      <Header />
      <main>
        {/* <section id="core-concepts">
          <ul>
            <CourseGoal title="Learn react" description="in-depth" />
            <CourseGoal title="exercise" description="done by me" />
          </ul>
        </section> */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
