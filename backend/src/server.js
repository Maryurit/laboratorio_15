const app = require('./app');
const sequelize = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await sequelize.authenticate();  // Corregido: authorticate → authenticate
        console.log("Conexión a la base de datos establecida");

        await sequelize.sync({ alter: true });
        console.log("Modelos sincronizados");

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);  // Corregido: comillas simples por backticks
        });
    } catch (error) {  // Corregido: corchete [ por llave {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
};

startServer();