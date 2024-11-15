import mysql from "mysql";

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ep biblioteca"
});

conn.connect((err) => {
    if(err){
        console.log("Ocorreu erros no BD", err);
        return;
    }
    console.log("Conexão bem sucedida ao BD")
});

export {conn}