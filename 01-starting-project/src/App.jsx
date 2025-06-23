// function Header() {
//   return (
//     <header>
//       <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       <p>
//         Fundamental React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

function MainGoal() {
  return (
    <div>
      <h1>Main goal</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut porro
        modi quas consequuntur ut eum deserunt ipsam, veniam, quod nisi eveniet
        harum temporibus numquam assumenda iusto iure similique corrupti.
      </p>
      <p>
        <strong>Lorem ipsum </strong>dolor sit amet consectetur adipisicing
        elit. Atque ab quibusdam molestias?
      </p>
      <p>
        {' '}
        <strong>Lorem,</strong> ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MainGoal />
      {/* <Header /> */}

      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
