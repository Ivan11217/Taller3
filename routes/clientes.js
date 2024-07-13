const express = require('express');

module.exports = (Cliente) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const clientes = await Cliente.find({});
      res.render('clientes', { clientes });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const nuevoCliente = new Cliente({
        nombre: req.body.nombre,
        apellido: req.body.apellido
      });
      await nuevoCliente.save();
      res.redirect('/clientes');
    } catch (err) {
      res.status(500).send(err);
    }
  });

  return router;
};
