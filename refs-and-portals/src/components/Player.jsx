import { useRef, useState } from 'react';

//Managing userInput with ref
export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}
      </h2>
      {/* <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> */}
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

//Managing userInput with state

// export default function Player() {
//   const [enteredPlayerName, setEnteredPlayerName] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(event) {
//     setSubmitted(false);
//     setEnteredPlayerName(event.target.value);
//   }

//   function handleClick() {
//     setSubmitted(true);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
