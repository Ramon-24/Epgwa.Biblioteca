import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", //Não tenho
    database: "Ep_boblioteca" //escrevi biblioteca de forma errada
});

// verifica se a conexão esta bem sucedida
conn.connect((err) => {
    if(err){
        console.log("Ocorreu erros na conexão ao BD", err);
        return;
    }
    console.log("Conexão bem sucedida ao BD")
});

export {conn} 