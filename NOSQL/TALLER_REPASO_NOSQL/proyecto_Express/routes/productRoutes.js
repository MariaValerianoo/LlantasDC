import { Router } from "express";
import { obtenerProductos,crearProducto,encontrarProductosPorPrecio,actPrecioProducto, actProductosMayores, eliminarProductoNom, eliminarProductosMenores } from "../controller/productController.js";
const router = Router()

router.get('/productos', obtenerProductos); 
router.post('/productos', crearProducto); 
router.get('/caros', encontrarProductosPorPrecio);
router.get('/ordenados-precio', actPrecioProducto); 
router.put('/actualizar-en-stock-por-precio', actProductosMayores); 
router.delete('/nombre', eliminarProductoNom); 
router.delete('/eliminar-por-precio', eliminarProductosMenores); 

export default router;