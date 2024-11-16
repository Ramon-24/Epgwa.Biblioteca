import { Router } from "express";
import { getYear } from "date-fns";
import {conn} from "./bd.js";

const put_router = Router()


put_router.get("/atualizar_serie", (req, res) => {
    conn.query('SELECT id, serie, ano FROM alunos', (err, result) => {
        if(err) {
            return res.json({
                Erro: "Erro ao buscar alunos " + err.message
            });
        };
        res.json(result)
    });
    
    const ano_atual = getYear(new Date());
    
    result.forEach(registro => {
        // Verificando serie de ex-alunos, para delete 
        if (registro.serie === 4) {
            conn.query(`DELETE FROM alunos WHERE id = '${registro.id}'`, (err, result) => {
                if(err) {
                    return res.json({
                        Deletar: "Os ex-alunos não foram deletados com sucesso!" + err.message
                    });
                };
                res.json({
                    Deletado: `Aluno foi deletado com sucesso!`
                });

            }); 

             // deletar de alunos que não podem ser monitores por estarem na 3 serie
             // Perguntar pro professor se pode reutilizar a rota
        } else if (registro.serie === 3) {
            conn.query(`DELETE FROM momitores WHERE id = '${registro.id}'`, (err, result) => {
                if(err) {
                    return res.json({
                        Deletar: "Os ex-monitores não foram deletados com sucesso!" + err.message
                    });
                };
                res.json({
                    Deletado: `Aluno que era monitor foi deletado da tabela de monitores!`
                });

            });

              // Atualização da serie dos alunos restantes
        } else if (registro.ano < ano_atual) {
            const diferenca = ano_atual - registro.ano;
            
            const nova_serie = registro.serie  + diferenca;
            
            conn.query(`UPDATE alunos SET serie = '${nova_serie}', ano = '${ano_atual}' WHERE id = '${registro.id}'`, (err, result) => {
                if(err) {
                    return res.json({
                        Edição: `Erro ao atualizar a serie do aluno ID ${registro.id}: ` + err.message
                    });
                };
                res.json({
                    Edicao: "Atualização efetuada com exeto!"
                })
            });
        };
    });
    
});

export {put_router};