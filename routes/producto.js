const express = require('express');
const router = express.Router();
const { Producto } = require('../models');

// Obtener todos los productos
router.get('/', async (req, res) => {
  const productos = await Producto.findAll();
  res.render('productos', { productos });
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
  await Producto.create({
    descrip: req.body.descrip,
    stock: req.body.stock,
    precio: req.body.precio
  });
  res.redirect('/productos');
});

module.exports = router;
