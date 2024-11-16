import { Router } from "express";
import { conn } from "./bd";

const empr_router = Router();

empr_router.post("/emprestimos", (req, res) => {
    const { aluno_id, livro_tombo, data_emprestimo, data_devolucao } = req.body;

    if (aluno_id == " " || livro_tombo == " " || data_emprestimo == " " || data_devolucao == " ") {
        return res.json({
            Erro: "Informe todos os campos obrigatórios!"
        });
    }

    conn.query(`SELECT id FROM alunos WHERE id = '${aluno_id}'`, (err, results) => {
        if (err) {
            return res.json({
                 Erro: "Erro no BD ao verificar aluno!" + err.message
                });
        }

        // if (results.length === 0) {
        //     return res.json({ 
        //         Erro: "Aluno não encontrado!" 
        //     });
        // }


        conn.query(`SELECT * FROM emprestimos WHERE Aluno_id = '${aluno_id}' AND Status = 'Emprestado'`, (err, results) => {
            if (err) {
                return res.json({ 
                    Erro: "Erro no banco de dados ao verificar empréstimos!" + err.message
                });
            }

            // if (results.length > 0) {
            //     return res.json({
            //         Erro: "Este aluno já possui um empréstimo ativo!"
            //     });
            // }

            conn.query(`SELECT * FROM emprestimos WHERE Livro_tombo = '${livro_tombo}' AND Status = 'Emprestado'`, (err, emprestimosLivro) => {
                if (err) {
                    return res.json({ 
                        Erro: "Erro no banco de dados ao verificar status do livro!" + err.message
                    });
                }

                // if (emprestimosLivro.length > 0) {
                //     return res.json({
                //         Erro: "Este livro já está emprestado!"
                //     });
                // }


                const status = "Emprestado";
                conn.query(`INSERT INTO emprestimos (Aluno_id, Livro_tombo, Data_emprestimo, Data_devolucao, Status)
                    VALUES ('${aluno_id}', '${livro_tombo}', '${data_emprestimo}', '${data_devolucao}', '${status}')`,(err, result) => {
                        if (err) {
                            return res.json({
                                Erro: "Erro no banco de dados ao registrar o empréstimo!" + err.message
                            });
                        }
                        res.json({
                            Sucesso: "Empréstimo registrado com sucesso!",
                            EmprestimoID: result.insertId
                        });
                    }
                );
            });
        });
    });
});




empr_router.delete("/emprestimos/devolucao", (req, res) => {
    const { nome, curso, serie, livro_tombo } = req.body;

    if (nome == " " || curso == " " || serie == " " || livro_tombo == " ") {
        return res.json({
            Erro: "Informe todos da sua devolução!"
        });
    }

    conn.query(`SELECT id FROM alunos WHERE nome = '${nome}' AND curso = '${curso}' AND serie = '${serie}'`, (err, result) => {
        if (err) {
            return res.json({
                 Erro: "Erro no Bd na verificação do aluno!" + err.message
            });
        }
        // if (result.length === 0) {
        //     return res.json({ 
        //         Erro: "Aluno não encontrado!" 
        //     });
        // }

        const alunoId = result[0].id;

        conn.query(`SELECT Tombo FROM livros WHERE Tombo = '${livro_tombo}'`, (err, result) => {
            if (err) {
                return res.json({
                    Erro: "BD não consegue verificar livro!" + err.message
                });
            }
            // if (result.length === 0) {
            //     return res.json({
            //         Erro: "Livro não encontrado!" 
            //     });
            // }

            conn.query(`SELECT Id FROM emprestimos WHERE Aluno_id = '${alunoId}' AND Livro_tombo = '${livro_tombo}' AND Status = 'Emprestado'`, (err, result) => {
                if (err) {
                    return res.json({
                        Erro: "BD não consegue verificar o empréstimo!" + err.message
                    });
                }
                // if (result.length === 0) {
                //     return res.json({
                //         Erro: "Empréstimo ativo não encontrado!" 
                //     });
                // }

                const emprestimoId = result[0].Id;

                conn.query(`DELETE FROM emprestimos WHERE Id = '${emprestimoId}'`, (err, result) => {
                    if (err) {
                        return res.json({
                            Erro: "BD não conseguiu deletar o empréstimo!" + err.message
                        });
                    }
                    res.json({
                        Sucesso: "Empréstimo devolvido e removido com sucesso!"
                    });
                });
            });
        });
    });
});




export {empr_router};