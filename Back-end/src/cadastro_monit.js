import { Router } from "express";
import {conn} from "./bd.js";

const mont_router = Router();


mont_router.post("/monitores", (req, res) => {
    const { nome, curso, serie } = req.body;

    if (nome == " " || curso == " " || serie == " ") {
        return res.json({
            Erro: "Informe seus dados!"
        });
    }

    conn.query(`SELECT id FROM alunos WHERE nome = '${nome}' AND curso = '${curso}' AND serie = '${serie}'`, (err, results) => {
        if (err) {
            return res.json({
                Erro: "Erro ao buscar o aluno no BD" + err.message
            });
        }else if (results.length === 0) {
            return res.json({
                Erro: "Aluno não encontrado!"
            });
        };

        const alunoId = results[0].id;

        conn.query(`SELECT * FROM momitores WHERE aluno_id = '${alunoId}'`, (err, results) => {
            if(results.length > 0){
                return res.json({
                    Aviso: `'${nome}' já é um monitor`
                })
            }
        })


        conn.query(`INSERT INTO monitores (aluno_id) VALUES ('${alunoId}')`, (err, result) => {
            if(err) {
                return res.json({
                    Erro: "Erro ao cadastrar o monitor no banco de dados!" + err.message
                });
            }
            res.json({
                Sucesso: "Monitor cadastrado com sucesso!",
                MonitorID: result.insertId 
            });
        });
    });
});




export {mont_router};