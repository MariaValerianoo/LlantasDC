import { config } from "dotenv"
import express, {json} from "express"
import path from "path"

import { connectDatabase } from "./config/database.js"
import artistaRoutes from "./routes/artistaRoute.js"
import albumRoutes from "./routes/albumRoute.js"
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
server.use(artistaRoutes)
server.use(albumRoutes)


server.listen(PORT, () => console.log(`Server runinn in port ${PORT}`))