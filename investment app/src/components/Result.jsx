export default function Result(results) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>End Value</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.interest.toFixed(2)}</td>
            <td>{yearData.valueEndOfYear.toFixed(2)}</td>
            <td>{yearData.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
