import express from "express";
import { cad_router } from "./cadastro_alun.js";
import { log_router } from "./login.js";
import { put_router } from "./atualizacao_aluno.js";
import { mont_router } from "./cadastro_monit.js";
import { liv_router } from "./cadastro_livr.js";
import { empr_router } from "./emprestimo.js";


const app = express();
app.use(express.json());
app.use("/cad_aluno", cad_router);
app.use("/login", log_router);
app.use("/atualizar_serie", put_router);
app.use("/cad_monit", mont_router);
app.use("/cad_livro", liv_router);
app.use("/emprestimos", empr_router);

app.listen(3000, (req, res) => {
    console.log("O servidor Ep Biblioteca está finalmente rodando sem erros!!!!")
});
