import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      {/* <MainGoal /> */}
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CourseGoal title="Learn react" description="in-depth" />
            <CourseGoal title="exercise" description="done by me" />
          </ul>
        </section>
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

// Exercise
// function MainGoal() {
//   return (
//     <div>
//       <h1>Main goal</h1>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut porro
//         modi quas consequuntur ut eum deserunt ipsam, veniam, quod nisi eveniet
//         harum temporibus numquam assumenda iusto iure similique corrupti.
//       </p>
//       <p>
//         <strong>Lorem ipsum </strong>dolor sit amet consectetur adipisicing
//         elit. Atque ab quibusdam molestias?
//       </p>
//       <p>
//         {' '}
//         <strong>Lorem,</strong> ipsum dolor sit amet consectetur adipisicing
//         elit.
//       </p>
//     </div>
//   );
// }
