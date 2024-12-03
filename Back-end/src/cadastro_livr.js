import { Router } from "express";
import {conn} from "./bd.js";

const liv_router = Router()

// Precisa da foto do livro como .png
liv_router.post("/cad_livro", (req, res) => {
    const { Tombo, Nome, Autor, Ano_publicacao } = req.body;

    conn.query(`INSERT INTO livros (Tombo, Nome, Autor, Ano_publicacao)
        values ('${Tombo}', '${Nome}', '${Autor}', '${Ano_publicacao}')`, (err, result) => {
            if(err){
                return res.json({
                    Erro: "Não foi possivel fazer o cadastro do livro" + err.message
                });
            };
            res.json(result)
        });
});

export {liv_router};