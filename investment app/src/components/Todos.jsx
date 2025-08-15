import Todo from './exercise';

import { TODOS } from '../data';

export default function Todos() {
  return (
    <section id="core-concepts">
      <ul>
        {TODOS.map((todoItem) => (
          <Todo key={todoItem} text={todoItem} />
        ))}
      </ul>
    </section>
  );
}
