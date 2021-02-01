import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import path from 'path'

//necesario para poder recibir imagenes
const storage = multer.diskStorage({
    
    destination:'img',
    filename:(req,file,cb) => {
        console.log("entro en multer")
        cb(null, uuidv4() + path.extname(file.originalname) )
    }

    
})




export default multer({storage});