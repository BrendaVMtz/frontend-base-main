import PropTypes from 'prop-types';
import './../styles/components/table.css';  // Ruta correcta para el archivo CSS

const Table = ({ transactions, sortColumn, setSortColumn, sortDirection, setSortDirection }) => {
  const handleSort = (column) => {
    const newSortDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newSortDirection);
  };

  return (
    <div className="table-container">
      <h2 className="table-title">Lista</h2>
      <table className="table">
        <thead>
          <tr>
            {['id', 'balance_fecha', 'id_cuenta_debe', 'id_cuenta_haber', 'cantidad'].map((column) => (
              <th
                key={column}
                className="border px-4 py-2 cursor-pointer"
                onClick={() => handleSort(column)}
              >
                {column.replace(/_/g, ' ')} {sortColumn === column && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.id}</td>
              <td className="border px-4 py-2">{`${transaction.mes} ${transaction.año}`}</td>
              <td className="border px-4 py-2">{transaction.id_cuenta_debe}</td>
              <td className="border px-4 py-2">{transaction.id_cuenta_haber}</td>
              <td className="border px-4 py-2">{transaction.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortColumn: PropTypes.string.isRequired,
  setSortColumn: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  setSortDirection: PropTypes.func.isRequired,
};

export default Table;
