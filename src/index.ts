import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import baseRoutes from './routes/baseRoutes';
import jugadoresRoutes from './routes/jugadoresRoutes';

class Server {
    //declaracion de variables
    public app: Application;
    
    //constructor de la clase
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //configuracion
    config(): void {
        this.app.set('puerto', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use('/img', express.static(path.resolve('img')))
    }

    //rutas 
    routes(): void {
        this.app.use('/', baseRoutes);
        this.app.use('/api/jugadores', jugadoresRoutes);
    }

    //Funcion de inicio
    start() {
        this.app.listen(this.app.get('puerto'), () => {
            console.log('Servidor corriendo en el puerto: ', this.app.get('puerto'));
        });   
    }

}

//instanciamos e iniciamos server
const server = new Server();
server.start();