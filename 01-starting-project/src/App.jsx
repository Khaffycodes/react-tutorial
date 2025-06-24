import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import Card from './components/exercise.jsx';

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        <section>
          {/* <Card name="shile">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nesciunt quo molestiae animi, molestias ipsam beatae at velit
              alias corrupti labore aspernatur impedit quaerat sapiente odit!
              Corrupti perspiciatis reprehenderit architecto!
            </p>
          </Card>
         */}
        </section>
      </main>
    </div>
  );
}

export default App;
