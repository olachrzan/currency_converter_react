import { StyledContainer, StyledText } from "./styled";

const RateContainer = ({ currencies, currency }) => (
  <StyledContainer>
    <StyledText>Aktualny kurs:</StyledText>
    <StyledText last>
      {currencies.find(({ shortName }) => shortName === currency).rate.toFixed(2)}
    </StyledText>
  </StyledContainer>
);

export default RateContainer;