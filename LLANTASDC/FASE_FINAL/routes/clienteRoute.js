import { Router } from "express";
import { obtenerClientes, crearCliente,buscarClienteTercero,buscarClienteCiudad,buscarClienteDireccion, 
contarCliente,buscarClienteLikeTelefono,cambiarTerceroRut ,cambiarDireccionRut,cambiarTelefonoRut,
cambiarCiudadRut,cambiarNombreRut,eliminarClienteRut,nombreTerceroRut,direccionRut,telefonoRut,
ciudadRut,nombreContactoRut } from "../controller/clienteController.js";
const router = Router()

router.get('/clientes', obtenerClientes)
router.post('/createClientes', crearCliente)
router.get('/clienteTer',buscarClienteTercero)
router.get('/clienteCiu',buscarClienteCiudad)
router.get('/clienteDir',buscarClienteDireccion)
router.get('/clienteCount',contarCliente)
router.get('/clienteTlf',buscarClienteLikeTelefono)
router.put('/cliente',cambiarTerceroRut)
router.put('/clienteDiRut',cambiarDireccionRut)
router.put('/clienteTlfRut',cambiarTelefonoRut)
router.put('/clienteCiuRut',cambiarCiudadRut)
router.put('/clienteNomRut',cambiarNombreRut)
router.put('/clienteactNom',nombreTerceroRut)
router.put('/clienteactDir',direccionRut)
router.put('/clienteactTlf',telefonoRut)
router.put('/clienteactCiu',ciudadRut)
router.put('/clienteactNomContacto',nombreContactoRut)
router.delete('/clientedelete',eliminarClienteRut)


export default router;