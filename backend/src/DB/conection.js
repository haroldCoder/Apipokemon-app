const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2364144",
    database: "pokedb"
})

connection.connect((err)=>{
    if(err) throw err
    console.log("conected");
})
module.exports = connection;
