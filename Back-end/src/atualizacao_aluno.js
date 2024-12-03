import { Router } from "express";
import { getYear } from "date-fns";
import {conn} from "./bd.js";

const put_router = Router()


put_router.get("/atualizar_serie", (req, res) => {
    conn.query('SELECT Id, Serie, Ano FROM alunos', (err, result) => {
        if(err) {
            return res.json({
                Erro: "Erro ao buscar alunos " + err.message
            });
        };
        // res.json(result)
        
        const ano_atual = getYear(new Date());
        const promises = [];
        
        // Se não me engano a função forEach tem dois parâmetros, antes de ser chamada 
        result.forEach(registro => {
            // Verificando serie de ex-alunos, para delete 
            if (registro.Serie === 4) {
                promises.push(new Promise((resol, reject) => {
                        conn.query(`DELETE FROM alunos WHERE Id = '${registro.id}'`, (err, result) => {
                            if(err) {
                                reject("Os ex-alunos não foram deletados com sucesso!" + err.message);
                            } else {
                                resol(`Aluno foi deletado com sucesso!`);
                            };
                        }); 
                    })
                );

                // Deletar de alunos que não podem ser monitores por estarem na 3 serie
                // Perguntar pro professor se pode reutilizar a rota
            } else if (registro.serie === 3) {
                promises.push(new Promise((resol, reject) => {
                        conn.query(`DELETE FROM momitores WHERE Id = '${registro.id}'`, (err, result) => {
                            if(err) {
                                reject("Os ex-monitores não foram deletados com sucesso!" + err.message);
                            }else{
                                resol(`Aluno que era monitor foi deletado da tabela de monitores!`);
                            };
                        });
                    })

                );
                
                // Atualização da serie dos alunos restantes
            } else if (registro.Ano < ano_atual) {
                const diferenca = ano_atual - registro.Ano;
                const nova_serie = registro.Serie  + diferenca;
                
                promises.push(new Promise((resol, reject) => {
                        conn.query(`UPDATE alunos SET Serie = '${nova_serie}', Ano = '${ano_atual}' WHERE Id = '${registro.id}'`, (err, result) => {
                            if(err) {
                                reject(`Erro ao atualizar a serie do aluno ID ${registro.id}: ` + err.message);
                            }else{
                                resol("Atualização efetuada com exeto!");
                            };
                        });
                    })
                );
            };
            
        });

        Promise.allSettled(promises)
            .then((results) => {
                const respostas = results.map((resultado) =>
                    resultado.status === "fulfilled"
                        ? resultado.value
                        : `Erro: ${resultado.reason}`
                );
                res.json({ resultados: respostas });
            })
            .catch((error) => {
                res.json({ Erro: "Erro inesperado: " + error.message });
            });

    });
});

export {put_router};