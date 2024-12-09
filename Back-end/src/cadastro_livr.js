import { Router } from "express";
import {conn} from "./bd.js";

const liv_router = Router()

// Precisa da foto do livro como .png (não foi colocada por dica do professor)
liv_router.post("/cad_livro", (req, res) => {
    const { Tombo, Nome, Autor, Ano_publicacao, Sinopse } = req.body;

    // Utilizando os dados imformados no body, para inserir um novo livro
    conn.query(`INSERT INTO livros (Tombo, Nome, Autor, Ano_publicacao, Sinopse)
        values ('${Tombo}', '${Nome}', '${Autor}', '${Ano_publicacao}', '${Sinopse}')`, (err, result) => {
            if(err){
                return res.json({
                    Erro: "Não foi possivel fazer o cadastro do livro" + err.message
                });
            };
            res.json(result)
        });
});





// Listagem de livros
liv_router.get("/livros", (req, res) => {
    conn.query("SELECT * FROM livros", (err, results) => {
        if (err) {
            return res.json({
                erro: "Erro ao buscar os livros." + err.message
            });
        }
        res.json(results);
    });
});





export {liv_router};