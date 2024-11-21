import { Router } from "express";
import {  } from "../controller/clienteController.js";
const router = Router()

router.get('/', obtenerDatos)
router.post('/', crearDatos)


export default router;