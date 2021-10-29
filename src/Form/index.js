import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "../Result";
import RateContainer from "../RateContainer";

const Form = ({ calculateResult, result }) => {
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState(currencies[0].shortName);
	const [wasValidated, setWasValidated] = useState(false);

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(amount, currency);
	};

	return (
		<form className="form" onSubmit={onFormSubmit}>
			<h2 className="form__header">Przelicz walutę</h2>
			<label className="form__label"><span className="form__labelText">Kwota w PLN:*</span>
				<input
					value={amount}
					onChange={({ target }) => setAmount(target.value)}
					onBlur={() => { setWasValidated(true) }}
					className={`form__field form__field--size ${wasValidated ? 'form_field--validated' : ''}`}
					placeholder="Wpisz kwotę"
					type="number"
					min="0.01"
					step="0.01"
					required
				/>
			</label>
			<label className="form__label"><span className="form__labelText">Przelicz na:</span>
				<select
					value={currency}
					onChange={({ target }) => setCurrency(target.value)}
					className="form__field"
				>
					{currencies.map(i => (
						<option key={i.shortName} value={i.shortName} >
							{i.name}
						</option>
					))}
				</select>
			</label>
			<RateContainer currencies={currencies} currency={currency} />
			<input
				className="form__button"
				type="submit"
				value="Przelicz"
				onClick={() => setWasValidated(true)}
			/>
			<Result result={result} />
			<p className="form__paragraph">
				* - Należy wpisać liczbę, która ma max. dwa miejsca po przecinku
			</p>
		</form>
	)
};

export default Form;