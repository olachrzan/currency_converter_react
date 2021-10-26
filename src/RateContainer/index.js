import "./style.css";

const RateContainer = ({currencies, currency}) => (
  <div className="rateContainer">
    <p className="rateContainer__text">Aktualny kurs:</p>
    <p className="rateContainer__text rateContainer__text--last">
      {currencies.find(({ shortName }) => shortName === currency).rate.toFixed(2)}
      </p>
  </div>
);

export default RateContainer;