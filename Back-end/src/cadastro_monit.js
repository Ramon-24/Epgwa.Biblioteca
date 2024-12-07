import { Router } from "express";
import {conn} from "./bd.js";

const mont_router = Router();

// Declaração da rota a ser seguida, e das variaveis que vão ser requeridas(req)
mont_router.post("/monitores", (req, res) => {
    const { Nome, Curso, Serie } = req.body;

    // Verificação de campus vazios
    if (Nome == " " || Curso == " " || Serie == " ") {
        return res.json({
            Erro: "Informe seus dados!"
        });
    }


    // Buscando na tabela alunos, se o aluno informado existe
    conn.query(`SELECT Id FROM alunos WHERE Nome = '${Nome}' AND Curso = '${Curso}' AND Serie = '${Serie}'`, (err, results) => {
        if (err) {
            return res.json({
                Erro: "Erro ao buscar o aluno no BD" + err.message
            });      // Verifica a quantidade de caracteres encontrados no "array" do BD
        }else if (results.length === 0) {
            return res.json({
                Erro: "Aluno não encontrado!"
            });
        };

        // Armazena o primeiro aluno a ser encontrado com essas informações
        const alunoId = results[0].id;


        // Verifica a existencia desse aluno, como membro já existente da monitoria
        conn.query(`SELECT * FROM monitoria WHERE Aluno_id = '${alunoId}'`, (err, results) => {
            if(results.length > 0){
                return res.json({
                    Aviso: `'${Nome}' já é um monitor`
                })
            }
        })

        // Insere na tabela, por meio de uma FK, o aluno que passar por todos esses requisitos
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