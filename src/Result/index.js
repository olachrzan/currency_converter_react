import "./style.css";

const Result = ({ result }) => {
  if (result === undefined)
    return null

  return (
    <p className="result">
      {result.initialAmount}&nbsp;PLN&nbsp;= { }
      <strong>{result.finalAmount.toFixed(2)}</strong>&nbsp;{result.currency}
    </p>
  )
};

export default Result;