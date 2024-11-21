import { Router } from "express";

import {crearAlbum, buscarAlbum, actualizarAlbum, eliminarAlbum} from "../Controller/album.js";

const router = Router();

router.post('/albumcrear',crearAlbum);
router.get('/albumbuscar', buscarAlbum);
router.put('/albumactualizar', actualizarAlbum);
router.delete('/albumeliminar', eliminarAlbum);

export default router;