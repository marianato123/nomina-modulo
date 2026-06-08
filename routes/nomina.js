const express = require('express');
const router = express.Router();
const nominaController = require('../controllers/nomina');

// Obtener todos los empleados
router.get('/empleados', nominaController.getEmpleados);

// Calcular nómina de un empleado
router.get('/calcular/:id', nominaController.calcularNomina);

module.exports = router;