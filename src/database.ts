//import de  libreria promisemysql
import mysql from 'promise-mysql';
//import de archivo de configuracion keys
import keys from './keys';
//creacion de una constante pool pasandole los datos del archivo keys con la config de nuestra bbdd
const pool = mysql.createPool(keys.database);
// iniciamos la conexion
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Conexion con la base de datos correcta!!');
    });

export default pool;
