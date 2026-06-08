const empleados = require('../data/empleados');

// Obtener lista de empleados
const getEmpleados = (req, res) => {
  res.json(empleados);
};

// Calcular nómina de un empleado por ID
const calcularNomina = (req, res) => {
  const id = parseInt(req.params.id);
  const empleado = empleados.find(e => e.id === id);

  if (!empleado) {
    return res.status(404).json({ error: 'Empleado no encontrado' });
  }

  const imss = empleado.salario * 0.0625;
  const isr = empleado.salario * 0.10;
  const totalDeducciones = imss + isr;
  const salarioNeto = empleado.salario - totalDeducciones;

  res.json({
    empleado: empleado.nombre,
    salarioBruto: empleado.salario,
    deducciones: {
      imss: imss.toFixed(2),
      isr: isr.toFixed(2),
      total: totalDeducciones.toFixed(2)
    },
    salarioNeto: salarioNeto.toFixed(2)
  });
};

module.exports = { getEmpleados, calcularNomina };