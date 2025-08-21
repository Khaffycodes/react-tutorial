import investmentImg from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src={investmentImg} alt="app logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
