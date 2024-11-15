import express from "express";
import {cad_router} from "./cadastro.js"
// Pode ocorrer um erro com a importação do cad_router

const app = express();
app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("O servidor Ep Biblioteca está finalmente rodando sem erros!!!!")
});