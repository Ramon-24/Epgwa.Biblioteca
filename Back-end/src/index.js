import express from "express";
import { cad_router } from "./cadastro_alun.js";
import { log_router } from "./login.js";
import { put_router } from "./atualizacao_aluno.js";
import { mont_router } from "./cadastro_monit.js";
import { liv_router } from "./cadastro_livr.js";
import { empr_router } from "./emprestimo.js";


const app = express();
app.use(express.json());
app.use(cad_router);
app.use(log_router);
app.use(put_router);
app.use(mont_router);
app.use(liv_router);
app.use(empr_router);


app.get("/", (req, res) => {
    res.send("O servidor EP Biblioteca, está rodando!")
})

app.listen(3000, (req, res) => {
    console.log("O servidor Ep Biblioteca está finalmente rodando sem erros!!!!")
});
