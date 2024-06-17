import PropTypes from 'prop-types';
import '../styles/components/form.css';  

const Form = ({ 
  months, 
  years, 
  selectedMonth, 
  setSelectedMonth, 
  selectedYear, 
  setSelectedYear,
  accounts,
  selectedDebitAccount,
  setSelectedDebitAccount,
  selectedCreditAccount,
  setSelectedCreditAccount
}) => {
  return (
    <form className="form">
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="select"
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="select"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        value={selectedDebitAccount}
        onChange={(e) => setSelectedDebitAccount(e.target.value)}
        className="select"
      >
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </select>
      <select
        value={selectedCreditAccount}
        onChange={(e) => setSelectedCreditAccount(e.target.value)}
        className="select"
      >
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </select>
      <input type="number" placeholder="Cantidad" className="input"/>
    </form>
  );
};

Form.propTypes = {
  months: PropTypes.arrayOf(PropTypes.string).isRequired,
  years: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedMonth: PropTypes.string.isRequired,
  setSelectedMonth: PropTypes.func.isRequired,
  selectedYear: PropTypes.string.isRequired,
  setSelectedYear: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedDebitAccount: PropTypes.string.isRequired,
  setSelectedDebitAccount: PropTypes.func.isRequired,
  selectedCreditAccount: PropTypes.string.isRequired,
  setSelectedCreditAccount: PropTypes.func.isRequired,
};

export default Form;
