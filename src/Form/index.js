import { useState } from "react";
import Result from "./Result";
import RateContainer from "./RateContainer";
import { useRatesData } from "../useRatesData";
import {
	StyledForm,
	StyledHeader,
	StyledLoadingText,
	StyledLoadingItem,
	StyledErrorText,
	StyledErrorImage,
	StyledLabel,
	StyledLabelText,
	StyledField,
	StyledButton,
	StyledInfo
} from "./styled";
import sadFace from "../sadFace.png"

const Form = () => {
	const ratesData = useRatesData();
	const [amount, setAmount] = useState("");
	const [wasValidated, setWasValidated] = useState(false);
	const [currency, setCurrency] = useState();
	const [result, setResult] = useState();

	const calculateResult = (amount, currency) => {
		const finalRate = ratesData.rates[currency];

		setResult({
			initialAmount: +amount, finalAmount: amount * finalRate, currency
		});
	}

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(amount, currency);
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<StyledHeader>Przelicz walutę</StyledHeader>
			{ratesData.state === "loading"
				? (
					<>
						<StyledLoadingText>Chwila, pobierane są kursy walut</StyledLoadingText>
						<StyledLoadingItem></StyledLoadingItem>
					</>
				)
				: (ratesData.state === "error"
					? (
						<>
							<StyledErrorText><strong>Ups... Coś poszło nie tak.</strong></StyledErrorText>
							<p>
								Sprawdź połączenie z internetem. Jeśli działa jak należy powodem może być
								błąd podczas pobierania danych - spróbuj później.
							</p>
							<StyledErrorImage src={sadFace}></StyledErrorImage>
						</>
					)
					: (
						<>
							<StyledLabel>
								<StyledLabelText>Kwota w PLN:*</StyledLabelText>
								<StyledField as="input"
									dimension
									validated={wasValidated}
									value={amount}
									onChange={({ target }) => setAmount(target.value)}
									onBlur={() => { setWasValidated(true) }}
									placeholder="Wpisz kwotę"
									type="number"
									min="0.01"
									step="0.01"
									required
								/>
							</StyledLabel>
							<StyledLabel>
								<StyledLabelText>Przelicz na:</StyledLabelText>
								<StyledField
									value={currency}
									onChange={({ target }) => setCurrency(target.value)}
								>
									{Object.keys(ratesData.rates).map(currency => (
										<option key={currency} value={currency}>
											{currency}
										</option>
									))}
								</StyledField>
							</StyledLabel>
							<RateContainer />
							<StyledButton
								type="submit"
								value="Przelicz"
								onClick={() => setWasValidated(true)}
							/>
							<Result result={result} />
							<StyledInfo tip>
								* - Należy wpisać liczbę, która ma max. dwa miejsca po przecinku
							</StyledInfo>
							<StyledInfo>
								Kursy walut pochodzą z Europejskiego Banku Centralnego.<br />
								Aktualne na dzień <strong>{ratesData.date}</strong>
							</StyledInfo>
						</>
					)
				)
			}
		</StyledForm>
	)
};

export default Form;