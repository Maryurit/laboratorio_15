const Product = require('../models/Product');  // Corregido: Products → Product, results → require

exports.getAllProducts = async (req, res) => {  // Corregido: seq → req, res
    try {  // Corregido: toy → try
        const products = await Product.findAll();  // Corregido: Product (no Products)
        res.json({
            success: true,
            message: 'Productos obtenidos correctamente',  // Corregido: obtendos → obtenidos
            data: products
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener productos',
            data: null
        });
    }
};

exports.getProductById = async (req, res) => {  // Corregido: seq → req
    try {  // Corregido: toy → try
        const product = await Product.findByPk(req.params.id);  // Corregido: findByR → findByPk

        if (!product) {
            return res.status(404).json({  // Corregido: 400 → 404
                success: false,
                message: 'Producto no encontrado',  // Corregido: Products → Producto
                data: null
            });
        }

        res.json({
            success: true,
            message: 'Producto obtenido correctamente',  // Corregido: obtendos → obtenido
            data: product
        });
    } catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener producto',
            data: null
        });
    }
};

exports.createProduct = async (req, res) => {  // Corregido: seq → req
    try {  // Corregido: toy → try
        const { nombre, precio, description } = req.body;  // Corregido: precis → precio

        if (!nombre || !precio) {  // Corregido: precis → precio
            return res.status(400).json({
                success: false,
                message: 'Nombre y precio son requeridos',  // Corregido: requaridos → requeridos
                data: null
            });
        }

        if (precio <= 0) {  // Corregido: (precis) = 0 → precio <= 0
            return res.status(400).json({
                success: false,
                message: 'El precio debe ser mayor a 0',  // Corregido: precis → precio
                data: null
            });
        }

        const product = await Product.create({ nombre, precio, description });  // Corregido: precis → precio

        res.status(201).json({  // Eliminado: return res.status(200).json()
            success: true,
            message: 'Producto creado correctamente',
            data: product
        });
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al crear producto',
            data: null
        });
    }
};

exports.updateProduct = async (req, res) => {  // Corregido: neq → req, neo → res
    try {  // Corregido: toy → try
        const { nombre, precio, description } = req.body;  // Corregido: condt → const, res → req
        const product = await Product.findByPk(req.params.id);  // Corregido: condt → const

        if (!product) {
            return res.status(404).json({  // Corregido: 000 → 404
                success: false,
                message: 'Producto no encontrado',
                data: null
            });
        }

        if (precio && precio <= 0) {
            return res.status(400).json({  // Corregido: 000 → 400
                success: false,
                message: 'El precio debe ser mayor a 0',
                data: null
            });
        }

        await product.update({ nombre, precio, description });

        res.json({
            success: true,
            message: 'Producto actualizado correctamente',
            data: product
        });
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al actualizar producto',
            data: null
        });
    }
};

exports.deleteProduct = async (req, res) => {  // Corregido: neq → req, neo → res
    try {  // Corregido: toy → try
        const product = await Product.findByPk(req.params.id);  // Corregido: condt → const

        if (!product) {
            return res.status(404).json({  // Corregido: 000 → 404
                success: false,
                message: 'Producto no encontrado',
                data: null
            });
        }

        await product.destroy();

        res.json({
            success: true,
            message: 'Producto eliminado correctamente',
            data: null
        });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({
            success: false,
            message: 'Error al eliminar producto',
            data: null
        });
    }
};