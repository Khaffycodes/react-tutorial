import { useState } from 'react';
import FetchInputs from './components/FetchInputs';
import Header from './components/Header';
import Result from './components/Result';
import { calculateInvestmentResults } from './util/investment';

function App() {
  const [userInput, setUserInput] = useState(null);

  function handleCalculate(inputValues) {
    // inputValues comes from UserInput component
    setUserInput(inputValues);
  }

  // Calculate results only if user has entered inputs
  let results = null;
  if (userInput) {
    results = calculateInvestmentResults(userInput);
  }

  return (
    <>
      <Header />
      <main>
        <FetchInputs />
        <Result />
      </main>
    </>
  );
}

export default App;

//onCalculate={handleCalculate}
//{results && <ResultsTable results={results} />}
