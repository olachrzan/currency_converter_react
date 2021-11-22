import { StyledResult } from "./styled";

const Result = ({ result }) => (
  result === undefined ? null : (
    <StyledResult>
      {result.initialAmount}&nbsp;PLN&nbsp;={" "}
      <strong>{result.finalAmount.toFixed(2)}</strong>
      &nbsp;{result.currency}
    </StyledResult>)
);

export default Result;