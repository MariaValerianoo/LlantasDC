import {Router} from "express";

import {crearArtista, buscarArtistasPais, buscarArtista} from '../Controller/artistas.js';

const router = Router();

router.post('/artistacrear', crearArtista);
router.get('/artistabuscarpais', buscarArtistasPais);
router.get('/artistabuscar', buscarArtista);

export default router;
