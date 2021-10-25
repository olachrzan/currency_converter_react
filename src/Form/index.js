import { useState } from "react";
import { currencies } from "../currencies";
import Button from "../Button";
import "./style.css";

const Form = () => {
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState(currencies[0].shortName);

	return (
		<form className="form">
			<h2 className="form__header">Przelicz walutę</h2>
			<label className="form__label"><span className="form__labelText">Kwota w PLN:*</span>
				<input
					value={amount}
					onChange={({ target }) => setAmount(target.value)}
					className="form__field form__field--size"
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
			<Button />
			<p className="form__paragraph">
				* - Należy wpisać liczbę, która ma max. dwa miejsca po przecinku
			</p>
		</form>
	)
};

export default Form;