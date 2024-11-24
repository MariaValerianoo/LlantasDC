import { config } from "dotenv"
import express, {json} from "express"
import path from "path"

import { connectDatabase } from "./config/database.js"
import clienteRoute from "./routes/clienteRoute.js"
import contenedorRoute from "./routes/contenedorRoute.js"
import productoRoute from "./routes/productoRoute.js"
import usuarioRoute from "./routes/usuarioRoute.js"
import ventaRoute from "./routes/ventaRoute.js"
config()

// Conexión Base de Datos
connectDatabase()
    .then(() => {
        console.log("Conexión Base de Datos Exitosa")
    })
    .catch((error) => {
        console.error("Error al conectar a la Base de Datos:", error)
        process.exit(1)
    });

// Configuración del servidor
const server = express()
const PORT = process.env.PORT
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

// Configuración del motor de plantillas


server.use(json())

// Configuración Rutas
server.use(clienteRoute)
server.use(contenedorRoute)
server.use(productoRoute)
server.use(usuarioRoute)
server.use(ventaRoute)


server.listen(PORT, () => console.log(`Server runinn in port ${PORT}`))