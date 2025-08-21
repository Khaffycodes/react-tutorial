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
    <form id="user-input" className="input-group">
      <label>
        Initial Investment
        <input type="text" />
      </label>
      <label>
        Annual Investment
        <input type="text" />
      </label>
      <label>
        Expected Return
        <input type="text" />
      </label>
      <label>
        Duration
        <input type="text" />
      </label>
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
