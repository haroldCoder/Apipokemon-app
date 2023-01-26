const express = require("express");
const app = express();

app.set("port", 8000);
app.use(express.json())

app.use("/api/pokemon", require("./routes/pokemon.route"))

app.listen(app.get("port"), (req, res)=>{
    console.log(`server on port ${app.get("port")}`);
})