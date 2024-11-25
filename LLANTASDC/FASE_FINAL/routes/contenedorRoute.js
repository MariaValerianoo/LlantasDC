import { Router } from "express";
import { obtenerContenedor,crearContenedor,buscarContenedorNaviera,buscarIdMayor,buscarContenedorFecha,
    contarContenedor,buscarContenedorLikeFactura,contenedorFechaLlegadaDES,buscarFechaFactura,navieraId,
    fechaLlegadaId,agenteAduaneraId} from "../controller/contenedorController.js";
const router = Router()

router.get('/contenedor', obtenerContenedor)
router.post('/contenedorcreate', crearContenedor)
router.get('/contenedorNav',buscarContenedorNaviera)
router.get('/contenedorID',buscarIdMayor)
router.get('/contenedorFecha',buscarContenedorFecha)
router.get('/contenedorContar',contarContenedor)
router.get('/contenedorFact',buscarContenedorLikeFactura)
router.get('/contenedorDES',contenedorFechaLlegadaDES)
router.get('/contenedorFecFact',buscarFechaFactura)
router.put('/contenedorNav',navieraId)
router.put('/contenedorID',fechaLlegadaId)
router.put('/contenedorAduID',agenteAduaneraId)

export default router;