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