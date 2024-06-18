import { Link } from 'react-router-dom';
import './../styles/components/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/transactions" className="nav-link">Transactions</Link>
        <Link to="/add-transaction" className="nav-link">Add Transaction</Link>
      </nav>
      <div className="header-title">
        <h1 className="title-text">Transacciones</h1>
      </div>
      <button className="logout-button">Logout</button>
    </header>
  );
};

export default Header;
