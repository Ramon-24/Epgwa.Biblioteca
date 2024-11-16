import express from "express";
import {cad_router} from "./cadastro.js"
import {log_router} from "./login.js"
// Pode ocorrer um erro com a importação do cad_router

const app = express();
app.use(express.json());
app.use("/cadastro", cad_router);
app.use("/login", log_router);

app.listen(3000, () => {
    console.log("O servidor Ep Biblioteca está finalmente rodando sem erros!!!!")
});
