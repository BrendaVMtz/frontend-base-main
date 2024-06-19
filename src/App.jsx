import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import { ProtectedRoute } from "./protectedRoutes";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/transactions" element={<h1>Transacciones</h1>} />
            <Route
              path="/add-transaction"
              element={<h1>Agregar transaccion</h1>}
            />
            <Route path="/transactions/:id" element={<h1>Transaccion</h1>} />
            <Route path="/tablasT" element={<h1>tablas T</h1>} />
            <Route path="/balance-general" element={<h1>Balance General</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
