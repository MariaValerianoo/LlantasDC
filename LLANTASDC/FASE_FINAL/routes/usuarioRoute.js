import { Router } from "express";
import { obtenerUsuarios,crearUsuarios,buscarUsuarioNombre,buscarUsuarioCorreo,
    buscarUsuarioId,buscarUsuarioTelefono,ordenarUsuarioASC,contarUsuarios,
    nombreUsuarioId,correoUsuarioId,telefonoUsuarioId,cambiarApellidoId} from "../controller/usuarioController.js";
const router = Router()

router.get('/usuario', obtenerUsuarios)
router.post('/usuario', crearUsuarios)
router.get('/usuarioNom',buscarUsuarioNombre)
router.get('/usuarioCo',buscarUsuarioCorreo)
router.get('/usuarioID',buscarUsuarioId)
router.get('/usuarioTlf',buscarUsuarioTelefono)
router.get('/usuarioOrd',ordenarUsuarioASC)
router.get('/usuarioCont',contarUsuarios)
router.put('/usuarioID',nombreUsuarioId)
router.put('/usuarioCo',correoUsuarioId)
router.put('/usuarioTlf',telefonoUsuarioId)
router.put('/usuarioApe',cambiarApellidoId)

export default router;