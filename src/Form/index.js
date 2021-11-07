import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import RateContainer from "./RateContainer";
import { StyledForm, Header, Label, LabelText, Field, Button, Info } from "./styled";

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
			<Header>Przelicz walutę</Header>
			<Label>
				<LabelText>Kwota w PLN:*</LabelText>
				<Field as="input"
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
			</Label>
			<Label>
				<LabelText>Przelicz na:</LabelText>
				<Field
					value={currency}
					onChange={({ target }) => setCurrency(target.value)}
				>
					{currencies.map(i => (
						<option key={i.shortName} value={i.shortName} >
							{i.name}
						</option>
					))}
				</Field>
			</Label>
			<RateContainer currencies={currencies} currency={currency} />
			<Button
				type="submit"
				value="Przelicz"
				onClick={() => setWasValidated(true)}
			/>
			<Result result={result} />
			<Info>
				* - Należy wpisać liczbę, która ma max. dwa miejsca po przecinku
			</Info>
		</StyledForm>
	)
};

export default Form;