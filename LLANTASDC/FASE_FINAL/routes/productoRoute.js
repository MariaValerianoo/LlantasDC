import { Router } from "express";
import { obtenerProducto,crearProducto,obtenerDimensionesPrecio,obtenerProductosPorCantidad,
    buscarProductoDimension,buscarProductoMarca,buscarProductoDiseño,buscarProductosPrecio,
    precioReferencia,cantidadReferencia,dimensionReferencia,diseñoReferencia,marcaReferencia,
 } from "../controller/productoController.js";
const router = Router()

router.get('/producto', obtenerProducto)
router.post('/producto', crearProducto)
router.get('/productoDim',obtenerDimensionesPrecio)
router.get('/productoCant',obtenerProductosPorCantidad)
router.get('/productoDimen',buscarProductoDimension)
router.get('/productoMar',buscarProductoMarca)
router.get('/productoDis',buscarProductoDiseño)
router.get('/productoPre',buscarProductosPrecio)
router.put('/producto',precioReferencia)
router.put('/productoCant',cantidadReferencia)
router.put('/productoDim',dimensionReferencia)
router.put('/productoDis',diseñoReferencia)
router.put('/productoMar',marcaReferencia)

export default router;