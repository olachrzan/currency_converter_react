import "./style.css";

const Form = () => (
   <form className="form">
      <h2 className="form__header">Przelicz walutę</h2>
      <label className="form__label"><span className="form__labelText">Kwota w PLN:*</span>
         <input
            className="form__field form__field--size"
            placeholder="Wpisz kwotę"
            type="number"
            min="0.01"
            step="0.01"
            required
         />
      </label>
      <label className="form__label"><span className="form__labelText">Przelicz na:</span>
         <select className="form__field">
            <option value="currencySelect" selected disabled>Wybierz walutę</option>
            <option value="EUR">EUR - euro</option>
            <option value="USD">USD - dolar amerykański</option>
            <option value="GBP">GBP - funt szterling</option>
            <option value="CHF">CHF - frank szwajcarski</option>
         </select>
      </label>
      <input className="button" type="submit" value="Przelicz" />
      <p className="form__paragraph">
         * - Należy wpisać liczbę, która ma max. dwa miejsca po przecinku
      </p>
   </form>
);

export default Form;