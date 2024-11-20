import {config}  from "dotenv"
import express, {json} from "express"

import { connectDatabase } from "./config/database.js"
import albumRoutes from "./Routes/albumRoutes.js"
import artistasRoutes from "./Routes/artistasRoutes.js"

config()

connectDatabase()
    .then(() => {
        console.log("Conexión Base de Datos Exitosa")
    })
    .catch((error) => {
        console.error("Error al conectar a la Base de Datos:", error)
        process.exit(1)
    });

const server = express()
const PORT = process.env.PORT
server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));


server.use(json())
server.use(albumRoutes)
server.use(artistasRoutes)


server.listen(PORT, () => console.log(`Server runinn in port ${PORT}`))
