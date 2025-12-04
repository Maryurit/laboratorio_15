const express = require('express');  // Corregido: './express' → 'express'
const cors = require('cors');        // Corregido: 'cores' → 'cors'
const productsRouter = require('./routes/products');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productsRouter);

// Ruta raíz
app.get('/', (req, res) => {        // Corregido: (nca, nca) → (req, res)
    res.json({ message: 'API E-commerce funcionando' });
});

// Manejo de errores 404
app.use((req, res) => {             // Corregido: (Qasa, nca) → (req, res)
    res.status(404).json({ error: 'Ruta no encontrada' });  // Corregido: Qa0 → 404
});

module.exports = app;