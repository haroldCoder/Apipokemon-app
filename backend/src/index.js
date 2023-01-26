const express = require("express");
const app = express();

app.set("port", 8000);

app.get("/", (req, res)=>{
    res.send("hello world");
})

app.listen(app.get("port"), (req, res)=>{
    console.log(`server on port ${app.get("port")}`);
})