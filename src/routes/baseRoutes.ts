import { Router } from 'express';
import { baseController } from '../controllers/baseController';

//clase que contiene la ruta base o ruta raiz de la aplicacion
class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', baseController.base);
    }

}

const baseRoutes = new IndexRoutes();
export default baseRoutes.router;