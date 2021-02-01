import express, { Router } from 'express';

import jugadoresController from '../controllers/jugadoresController';

import multer from '../libs/multer'

//clase que contiene todas las rutas de la aplicacion
class JugadoresRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', jugadoresController.listarJugadores);
        this.router.get('/:id', jugadoresController.devolverJugador);
        this.router.post('/', multer.single('imagen') , jugadoresController.crearJugador);
        this.router.put('/:id', multer.single('imagen') ,jugadoresController.actualizarJugador);
        this.router.delete('/:id', jugadoresController.eliminarJugador);
        this.router.get('/filtros/:pos/:eq/:nac', jugadoresController.listarJugadoresFiltrados)
    }

}

export default new JugadoresRoutes().router;

