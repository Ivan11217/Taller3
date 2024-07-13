const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Conexión a MongoDB con Mongoose
mongoose.connect('mongodb://localhost:27017/proyectoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB', err));

// Configuración de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Definición de esquemas y modelos
const Cliente = mongoose.model('Cliente', new mongoose.Schema({
  nombre: String,
  apellido: String
}));

const Producto = mongoose.model('Producto', new mongoose.Schema({
  descrip: String,
  stock: Number,
  precio: Number
}));

const Pedido = mongoose.model('Pedido', new mongoose.Schema({
  fecha: Date,
  clienteId: mongoose.Schema.Types.ObjectId, // Cambié idcliente a clienteId para seguir convenciones
  estado: String
}));

const ProdxPedido = mongoose.model('ProdxPedido', new mongoose.Schema({
  productoId: mongoose.Schema.Types.ObjectId, // Cambié idprod a productoId
  pedidoId: mongoose.Schema.Types.ObjectId // Cambié idpedido a pedidoId
}));

// Importación de rutas
const clientesRouter = require('./routes/clientes')(Cliente); // Pasamos el modelo Cliente como argumento
const productosRouter = require('./routes/productos')(Producto);
const pedidosRouter = require('./routes/pedidos')(Pedido, Cliente);

// Rutas
app.use('/clientes', clientesRouter);
app.use('/productos', productosRouter);
app.use('/pedidos', pedidosRouter);

app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
