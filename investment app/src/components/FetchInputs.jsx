import { useState } from 'react';

export default function FetchInputs() {
  const [inputs, setInputs] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: '',
  });

  function handleChange(e) {
    const { amount, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [amount]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page refresh

    const investmentData = {
      initialInvestment: +inputs.initialInvestment,
      annualInvestment: +inputs.annualInvestment,
      expectedReturn: +inputs.expectedReturn,
      duration: +inputs.duration,
    };

    onCalculate(investmentData); // send data up to parent
  }

  return (
    <form onSubmit={handleSubmit} id="user-input">
      <main className="input-group">
        <label>
          Initial Investment
          <input
            type="number"
            name="initialInvestment"
            value={inputs.initialInvestment}
            onChange={handleChange}
          />
        </label>
        <label>
          Annual Investment
          <input
            type="number"
            name="initialInvestment"
            value={inputs.annualInvestment}
            onChange={handleChange}
          />
        </label>
        <label>
          Expected Return
          <input
            type="number"
            name="initialInvestment"
            value={inputs.expectedReturn}
            onChange={handleChange}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            name="initialInvestment"
            value={inputs.duration}
            onChange={handleChange}
          />
        </label>
      </main>

      <button type="submit">Calculate</button>
    </form>
  );
}

//  const [inputs, setInputs] = useState({
//     initialInvestment: "",
//     annualInvestment: "",
//     expectedReturn: "",
//     duration: "",
//   });

// function handleChange(e) {
//   const { amount, value } = e.target;
//   setInputs((prev) => ({
//     ...prev,
//     [amount]: value,
//   }));
// }

// function handleSubmit(e) {
//   e.preventDefault();

//   const investmentData = {
//     initialInvestment: +inputs.initialInvestment,
//     annualInvestment: +inputs.annualInvestment,
//     expectedReturn: +inputs.expectedReturn,
//     duration: +inputs.duration,
//   };

//   onCalculate(investmentData); // send data up to parent
// }
