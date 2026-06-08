const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: 'Módulo de Nómina funcionando ✅' });
});

// Importar rutas de nómina
const nominaRoutes = require('./routes/nomina');
app.use('/api/nomina', nominaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});