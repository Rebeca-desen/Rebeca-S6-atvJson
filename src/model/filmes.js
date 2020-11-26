const mongoose = require('mongoose')

const filmesSchema = new mongoose.Schema({
    id: { type: Number },
    nome: { type: String },
    ano: { type: String },
    assisti: { type: Boolean}
},{
    versionKey: false
})

const filmes = mongoose.model('collectionFilme', filmesSchema)

module.exports = filmes