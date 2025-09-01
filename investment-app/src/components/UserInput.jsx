export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
          />
        </p>

        <p>
          <label>Expected Return </label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          />
        </p>

        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
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
