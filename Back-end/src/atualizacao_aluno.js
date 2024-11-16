import { Router } from "express";
import { getYear } from "date-fns";
import {conn} from "./bd.js";

const put_router = Router()


// Atualizando aluno
put_router.put("/atualizar_serie", (req, res) => {
    conn.query('SELECT id, serie, ano FROM alunos', (err, result) => {
        if(err) {
            return res.json({
                Erro: "Erro ao buscar alunos " + err.message
            });
        };
        res.json(result)
    });
    
    const ano_atual = getYear(new Date());
    
    aluno.forEach(alunos => {
        if (alunos.ano < ano_atual) {
            const diferenca = ano_atual - alunos.ano;
            
            const nova_serie = alunos.serie  + diferenca;
            
            conn.query(`UPDATE alunos SET serie = '${nova_serie}', ano = '${ano_atual}' WHERE id = '${alunos.id}'`, (err, result) => {
                if(err) {
                    return res.json({
                        Edição: `Erro ao atualizar a serie do aluno ID ${aluno.id}: ` + err.message
                    });
                };
                res.json(result)
            });
        }
    });
    
});

export {put_router};