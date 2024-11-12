import { Router } from "express";
import { crearUsuario, obtenerDatos, encontrarUsuarioNom,encontrarUsuarioMayores, actEdadUsuario,actUsuariosMayores,eliminarUsuarioNom,eliminarUsuariosMenores } from "../controller/userController.js";
const router = Router()

router.get('/usuarios', obtenerDatos)
router.post('/usuarios', crearUsuario)
router.get('/:name', encontrarUsuarioNom);
router.post('/mayores', encontrarUsuarioMayores);
router.put('/actualizar-edad', actEdadUsuario);
router.put('/activar-usuarios', actUsuariosMayores);
router.delete('/nombre', eliminarUsuarioNom);
router.delete('/eliminar-menores', eliminarUsuariosMenores);

export default router;