// backend/server.js o backend/app.js

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Importa las rutas de autenticación

const app = express();

app.use(express.json()); // Middleware para parsear JSON

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
