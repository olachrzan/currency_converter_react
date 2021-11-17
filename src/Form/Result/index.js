import { StyledResult } from "./styled";

const Result = ({ result }) => {
  if (result === undefined)
    return null

  else if (isNaN(result.finalAmount))
    return (
      <StyledResult>Wybierz walutę</StyledResult>
    )

  return (
    <StyledResult>
      {result.initialAmount}&nbsp;PLN&nbsp;={" "}
      <strong>{result.finalAmount.toFixed(2)}</strong>
      &nbsp;{result.currency}
    </StyledResult>
  )
};

export default Result;