const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5173' // Permite solicitudes desde este origen
}));

app.use(express.json());

// Tus rutas y lógica de backend aquí

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
