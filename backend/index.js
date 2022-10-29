import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarBD from "./config/db.js";

dotenv.config(); // Para Trabajar con las Variables de Entorno


const PORT = process.env.PORT || 4000;


const app = express();

app.use(express.json()); // Para Trabajar con Document JSON

conectarBD();

// Middleware
app.use('/', (req, res) => {
    res.send("Hola Mundo de ExpressJS")
} );


app.listen( PORT, () => {
    console.log(` Servidor Encendido en el Puerto #${PORT} `)    
} )

