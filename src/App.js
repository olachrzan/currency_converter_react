import { useState } from "react";
import Container from "./Container";
import { currencies } from "./currencies";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const finalRate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      initialAmount: +amount, finalAmount: amount / finalRate, currency
    });
  }

  return (
    <>
      <Container>
        <Clock />
        <Form calculateResult={calculateResult} result={result} />
      </Container>
    </>
  );
}

export default App;
