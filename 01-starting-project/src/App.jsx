import { useState } from 'react';

import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';
import { TODOS } from './data.js';
import Todo from './components/exercise.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id="core-concepts">
          <ul>
            {TODOS.map((todoItem) => (
              <Todo key={todoItem} text={todoItem} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
