import { Router } from "express";
import { activoUsuarioEdad, ActivoUsuarioEdad, cambiarEdadUsuario, crearDatos, crearUsuarios, eliminarUsuarioEdad, EliminarUsuarioNombre, encontrarUsuarioMayor, encontrarUsuarioNombre, obtenerDatos } from "../controller/userController.js";
const router = Router()

router.get('/usuarios', obtenerDatos)
router.post('/usuarios', crearUsuarios)
router.get('/:name', encontrarUsuarioNombre);
router.post('/mayores', encontrarUsuarioMayor);
router.put('/actualizar-edad', cambiarEdadUsuario);
router.put('/activar-usuarios', activoUsuarioEdad);
router.delete('/nombre', EliminarUsuarioNombre);
router.delete('/eliminar-menores', eliminarUsuarioEdad);


export default router;