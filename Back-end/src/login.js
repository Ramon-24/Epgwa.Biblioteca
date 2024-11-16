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

    const verificar = `SELECT * FROM alunos WHERE nome = '${nome}' AND curso = '${curso}' AND serie = '${serie}'`;
    conn.query(verificar, (err, result) => {
        if (err) {
            return res.json({
                Erro: "Erro ao acessar o BD" + err.message
            });
        };

        if (results.length > 0) {
            return res.json({
                Sucesso: "Usuário encontrado!",
                Dados: results[0] 
            });
        } else {
            return res.json({
                Erro: "Usuário não encontrado!"
            });
        }

    });
});
