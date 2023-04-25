import express from "express";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";
import indexRoutes from './routes/index.js'

const app = express();
//creo una app indicando que es la ejecución de express. 


const __dirname = dirname(fileURLToPath(import.meta.url))
//el modulo de dirname permite convertir rutas abs a dynamics
//C:\Users\maari\NodeJS\Proyecto_Nodejs\src

app.set("views", join(__dirname, "views"))
//el modulo de join permite unificar criterios de path de linux y wdw

app.set('view engine', 'ejs')
//agrego config para extender el html  

app.use(indexRoutes)
//indico que importe el export por default de ./routes/index.js

app.use(express.static(join(__dirname, 'public')))
//traigo la ruta dynam de mi proy y le agrego la carpeta de public 



app.listen(3000, ()=>{
    console.log("server listening on port 3000")
} )
// le indico que escuche en el puerto 3000 

