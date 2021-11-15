import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import RateContainer from "./RateContainer";
import { StyledForm, StyledHeader, StyledLabel, StyledLabelText, StyledField, StyledButton, StyledInfo } from "./styled";

const Form = ({ calculateResult, result }) => {
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState(currencies[0].shortName);
	const [wasValidated, setWasValidated] = useState(false);

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(amount, currency);
	};

	return (
		<StyledForm onSubmit={onFormSubmit}>
			<StyledHeader>Przelicz walutę</StyledHeader>
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
					{currencies.map(i => (
						<option key={i.shortName} value={i.shortName} >
							{i.name}
						</option>
					))}
				</StyledField>
			</StyledLabel>
			<RateContainer currencies={currencies} currency={currency} />
			<StyledButton
				type="submit"
				value="Przelicz"
				onClick={() => setWasValidated(true)}
			/>
			<Result result={result} />
			<StyledInfo>
				* - Należy wpisać liczbę, która ma max. dwa miejsca po przecinku
			</StyledInfo>
		</StyledForm>
	)
};

export default Form;