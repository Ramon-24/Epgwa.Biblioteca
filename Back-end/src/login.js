import { Router } from "express";
import {conn} from "./bd.js";

const log_router = Router()

log_router.post("/login", (req, res) => {
    const {nome, curso, serie} = req.body
    if (nome == " " || curso == " " || serie == " "){
        return res.json({
            Erro: "Informe seus dados!"
        });
    };

    conn.query(`SELECT * FROM alunos WHERE Nome = '${nome}' AND Curso = '${curso}' AND Serie = '${serie}'`, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro ao acessar o BD" + err.message
            });
        };

        // if (result.length > 0) {
        //     return res.json({
        //         Sucesso: "Usuário encontrado!",
        //         Dados: result[0] 
        //     });
        // } else {
        //     return res.json({
        //         Erro: "Usuário não encontrado!"
        //     });
        // };

    });
});

export {log_router};