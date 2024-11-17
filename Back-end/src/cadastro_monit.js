import { Router } from "express";
import {conn} from "./bd.js";

const mont_router = Router();


mont_router.post("/monitores", (req, res) => {
    const { Nome, Curso, Serie } = req.body;

    if (Nome == " " || Curso == " " || Serie == " ") {
        return res.json({
            Erro: "Informe seus dados!"
        });
    }

    conn.query(`SELECT Id FROM alunos WHERE Nome = '${Nome}' AND Curso = '${Curso}' AND Serie = '${Serie}'`, (err, results) => {
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

        conn.query(`SELECT * FROM monitoria WHERE Aluno_id = '${alunoId}'`, (err, results) => {
            if(results.length > 0){
                return res.json({
                    Aviso: `'${Nome}' já é um monitor`
                })
            }
        })


        conn.query(`INSERT INTO monitoria (Aluno_id) VALUES ('${alunoId}')`, (err, results) => {
            if(err) {
                return res.json({
                    Erro: "Erro ao cadastrar o monitor no banco de dados!" + err.message
                });
            }
            res.json({
                Sucesso: "Monitor cadastrado com sucesso!",
                MonitorID: results.insertId 
            });
        });
    });
});




export {mont_router};