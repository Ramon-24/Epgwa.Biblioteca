import { Router } from "express";
import {conn} from "./bd.js";

const cad_router = Router()

// Cadastro do aluno que acabou de entrar na escola 
cad_router.post("/cad_aluno", (req, res) => {
    const { Nome, Endereco, Telefone, Curso, Ano, Serie } = req.body;

    conn.query(`INSERT INTO alunos (Nome, Endereco, Telefone, Curso, Ano, Serie) 
        values ('${Nome}', '${Endereco}', '${Telefone}', '${Curso}', '${Ano}', '${Serie}')`, (err, result) => {
            if(err) {
                return res.json({
                    Erro: "Erro no cadastro do aluno" + err.message
                });
            };
            res.json({
                Sucesso: `O cadastro do aluno(a), ${Nome} foi efetuado com sucesso!`
            });
        });
});



// Pode ser util depois, mas por enquanto vai ficar comentado

// cad_router.get("/list-user", (req, res) => {
//     conn.query("SELECT * FROM alunos", (err, result) => {
//         if(err) {
//             return res.json({
//                 Erro: "Erro ao consultar os dados dos alunos" + err.message
//             });
//         };
//         res.json(result)

//         result.map((item) => {
//             console.log(item.nome)
//         })
//     });
// });

export {cad_router};