import { Container, Text } from "./styled";

const RateContainer = ({ currencies, currency }) => (
  <Container>
    <Text>Aktualny kurs:</Text>
    <Text last>
      {currencies.find(({ shortName }) => shortName === currency).rate.toFixed(2)}
    </Text>
  </Container>
);

export default RateContainer;