import { Router } from "express";
import { obtenerVenta,crearVenta,buscarVentaPago,buscarVentaRut,buscarVentaUsuario,
    ventaTotalDES,buscarVentaFecha,buscarVentasRutCliente,metodoPagoNumOrden,fechaNumOrden,
    actualizarTotalCompra} from "../controller/ventaController.js";
const router = Router()

router.get('/venta', obtenerVenta)
router.post('/venta', crearVenta)
router.get('/ventaPago',buscarVentaPago)
router.get('/ventaRut',buscarVentaRut)
router.get('/ventaUsua',buscarVentaUsuario)
router.get('/ventaDES',ventaTotalDES)
router.get('/ventaFecha',buscarVentaFecha)
router.get('/ventaRutClie',buscarVentasRutCliente)
router.put('/ventaPago',metodoPagoNumOrden)
router.put('/ventaFecha',fechaNumOrden)
router.put('/ventaAct',actualizarTotalCompra)

export default router;