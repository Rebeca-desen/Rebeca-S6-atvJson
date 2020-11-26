const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://localhost:27017/filmes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
    console.log("conexão ta ok")
})

const index = require("./src/routes/index")
const filmes = require("./src/routes/filmesRoutes")

app.use(bodyParser.json())

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*" )
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/filmes", filmes)

module.exports = app