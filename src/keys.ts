//archivo que exporta la configuracion con los datos que vamos a utilizar para hacer la conexion con la bbdd 
export default {

    database: {
        host: 'localhost', //introduce la direccion del servidor, por ejemplo "localhost"
        user: 'root', //introduce el usuario con el que vas a conectar a tu base de datos
        password: 'root', // introduce la contraseña que tengas configurada en tu usuario de tu base de datos
        database: 'jugadores' // introduce el nombre de la base de datos creada para establecer la conexion
    }

}