import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { date, rates } = await response.json();
        setRatesData({
          date,
          rates,
          state: "success"
        });
      } catch {
        setRatesData({ state: "error" })
      }
    };

    setTimeout(fetchCurrencies, 2 * 1000)
  }, []);

  return ratesData;
};