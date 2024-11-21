import { Router } from "express";
import {  } from "../controller/productoController.js";
const router = Router()

router.get('/', obtenerDatos)
router.post('/', crearDatos)


export default router;