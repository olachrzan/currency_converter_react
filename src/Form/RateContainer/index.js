import { StyledContainer, StyledText } from "./styled";

const RateContainer = ({ rate }) => (
  <StyledContainer>
    <StyledText>Aktualny kurs:</StyledText>
    <StyledText last>
      {rate === undefined ? "—" : rate.toFixed(2)}
    </StyledText>
  </StyledContainer>
);

export default RateContainer;