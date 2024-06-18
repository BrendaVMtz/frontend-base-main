import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [months] = useState(['January', 'February', 'March', 'April']);
  const [years] = useState(['2021', '2022', '2023', '2024']);
  const [accounts] = useState([
    { id: 1, name: 'Capital Social' },
    { id: 2, name: 'Bancos' },
    { id: 3, name: 'Equipo de reparto' },
    { id: 4, name: 'Deposito en garantía' },
    { id: 5, name: 'Rentas pagadas' },
    { id: 6, name: 'Gastos de organización' },
    { id: 7, name: 'Caja' },
    { id: 8, name: 'Mobiliario y equipo' },
    { id: 9, name: 'Primas de seguros' },
    { id: 10, name: 'Mercancía' },
    { id: 11, name: 'Equipo de Cómputo' },
    { id: 12, name: 'Papelería' },
    { id: 13, name: 'Clientes' },
    { id: 14, name: 'Acreedores' },
    { id: 15, name: 'Proveedores' },
    { id: 16, name: 'Documentos por pagar' }
  ]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDebitAccount, setSelectedDebitAccount] = useState('');
  const [selectedCreditAccount, setSelectedCreditAccount] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetch('/transactions.json')
      .then(response => response.json())
      .then(data => {
        const transformedData = data.map(transaction => {
          const debitAccount = accounts.find(account => account.id === transaction.id_cuenta_debe)?.name || transaction.id_cuenta_debe;
          const creditAccount = accounts.find(account => account.id === transaction.id_cuenta_haber)?.name || transaction.id_cuenta_haber;
          return { ...transaction, id_cuenta_debe: debitAccount, id_cuenta_haber: creditAccount };
        });
        setTransactions(transformedData);
      });
  }, [accounts]);

  useEffect(() => {
    if (sortColumn) {
      const sortedTransactions = [...transactions].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      setTransactions(sortedTransactions);
    }
  }, [sortColumn, sortDirection, transactions]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/transactions" element={
          <div>
            <Form 
              months={months} 
              years={years} 
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              accounts={accounts}
              selectedDebitAccount={selectedDebitAccount}
              setSelectedDebitAccount={setSelectedDebitAccount}
              selectedCreditAccount={selectedCreditAccount}
              setSelectedCreditAccount={setSelectedCreditAccount}
            />
            <Table 
              transactions={transactions}
              sortColumn={sortColumn}
              setSortColumn={setSortColumn}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
          </div>
        } />
        <Route path="/add-transaction" element={<h1>Agregar transaccion</h1>} />
        <Route path="/transactions/:id" element={<h1>Transaccion</h1>} />
        <Route path="/tablasT" element={<h1>tablas T</h1>} />
        <Route path="/balance-general" element={<h1>Balance General</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
