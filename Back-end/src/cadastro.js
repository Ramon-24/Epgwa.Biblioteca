import { Router } from "express";
import {conn} from "./bd.js";
// Pode ocorrer um erro com a importação do conn

const cad_router = Router()

cad_router.post("/cadastro", (req, res) => {
    const { nome, endereco, telefone, curso, ano, serie } = req.body;

    conn.query(`insert into alunos (nome, endereco, telefone, curso, ano, serie) 
        values ('${nome}', '${endereco}', '${telefone}', '${curso}', '${ano}', '${serie}')`, (err, result) => {
            if(err) {
                return res.json({
                    Erro: "Erro no cadastro do aluno" + err.message
                });
            };
            res.json({
                Sucesso: `O cadastro do aluno(a), ${nome} foi efetuado com sucesso!`
            });
        });
});

cad_router.get("/list-user", (req, res) => {
    conn.query("select * from alunos", (err, result) => {
        if(err) {
            return res.json({
                Erro: "Erro ao consultar os dados dos alunos" + err.message
            });
        };
        res.json(result)

        result.map((item) => {
            console.log(item.nome)
        })
    });
});

export {cad_router};