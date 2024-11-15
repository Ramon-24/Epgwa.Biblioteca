import express from "express";

const app = express();
app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("O servidor Ep Boblioteca está finalmente rodando sem erros!!!!")
});