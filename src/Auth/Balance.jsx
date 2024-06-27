import React, { useState, useEffect } from 'react';
import '../Balance.css';

function BalanceGeneral() {
  const [activosCorrientes, setActivosCorrientes] = useState(0);
  const [activosNoCorrientes, setActivosNoCorrientes] = useState(0);
  const [pasivosCorrientes, setPasivosCorrientes] = useState(0);
  const [pasivosNoCorrientes, setPasivosNoCorrientes] = useState(0);
  const [capital, setCapital] = useState(0);
  const [resultadosAcumulados, setResultadosAcumulados] = useState(0);
  const [resultadosEjercicio, setResultadosEjercicio] = useState(0);
  const [totalActivos, setTotalActivos] = useState(0);
  const [totalPasivos, setTotalPasivos] = useState(0);
  const [totalPatrimonio, setTotalPatrimonio] = useState(0);
  const [balance, setBalance] = useState(0);
  const [balanceColor, setBalanceColor] = useState('balance-positive');

  const [showAlert, setShowAlert] = useState(false);

  const calcularBalance = () => {
    const totalActivos = activosCorrientes + activosNoCorrientes;
    const totalPasivos = pasivosCorrientes + pasivosNoCorrientes;
    const totalPatrimonio = capital + resultadosAcumulados + resultadosEjercicio;
    const balance = totalActivos - totalPasivos - totalPatrimonio;

    setTotalActivos(totalActivos);
    setTotalPasivos(totalPasivos);
    setTotalPatrimonio(totalPatrimonio);
    setBalance(balance);

    if (balance < 0) {
      setBalanceColor('balance-negative');
      setShowAlert(true);
    } else {
      setBalanceColor('balance-positive');
      setShowAlert(false);
    }
  };

  return (
    <div className="balance-general-container">
      <div className="balance-general-form">
        <h1>Balance General</h1>
        <table>
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Activos Corrientes</td>
              <td>
                <input
                  type="number"
                  value={activosCorrientes}
                  onChange={(e) => setActivosCorrientes(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
            <tr>
              <td>Activos No Corrientes</td>
              <td>
                <input
                  type="number"
                  value={activosNoCorrientes}
                  onChange={(e) => setActivosNoCorrientes(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
            <tr>
              <td>Pasivos Corrientes</td>
              <td>
                <input
                  type="number"
                  value={pasivosCorrientes}
                  onChange={(e) => setPasivosCorrientes(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
            <tr>
              <td>Pasivos No Corrientes</td>
              <td>
                <input
                  type="number"
                  value={pasivosNoCorrientes}
                  onChange={(e) => setPasivosNoCorrientes(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>
                <input
                  type="number"
                  value={capital}
                  onChange={(e) => setCapital(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
            <tr>
              <td>Resultados Acumulados</td>
              <td>
                <input
                  type="number"
                  value={resultadosAcumulados}
                  onChange={(e) => setResultadosAcumulados(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
            <tr>
              <td>Resultados del Ejercicio</td>
              <td>
                <input
                  type="number"
                  value={resultadosEjercicio}
                  onChange={(e) => setResultadosEjercicio(parseFloat(e.target.value) || 0)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={calcularBalance}>Calcular Balance</button>
      </div>
      <div className="balance-general-result">
        <div className="balance-general-result-content">
          <h2>Resultados</h2>
          <table>
            <thead>
              <tr>
                <th>Cuenta</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Activos</td>
                <td>{totalActivos.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total Pasivos</td>
                <td>{totalPasivos.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Total Patrimonio</td>
                <td>{totalPatrimonio.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td className={balanceColor}>{balance.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showAlert && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Alerta</h2>
            <p>El balance general es negativo. Esto puede deberse a que los pasivos y patrimonio superan a los activos.</p>
            <button onClick={() => setShowAlert(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BalanceGeneral;
