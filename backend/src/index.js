const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser");
const conection = require("./DB/conection")

app.set("port", 8000);
app.use(cors())
app.use(bodyParser.json())

app.use("/api/pokemon", require("./routes/pokemon.route"))

app.listen(app.get("port"), (req, res)=>{
    console.log(`server on port ${app.get("port")}`);
    conection;
})