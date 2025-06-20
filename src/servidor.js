import express from "express"; //reaizar la conexion por el servidor
import morgan from "morgan";  //moitorear solicitudes http

const servidor = express(); //se llama
servidor.use(morgan("dev"));
servidor.use(express.json());

servidor.get('/', (sol, res) => {
    res.status(404).send("no encontrado");
});
export default servidor;




