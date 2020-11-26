const filmes = require('../model/filmes')

const getAll = (req, res) => {

    filmes.find(function (err, filme) {
        if(err) res.status(500).send('algo errado')
        else{ res.status(200).send(filme) }
    })
}

const postFilmes = (req, res) => {
    let filme = new filmes(req.body)

    filme.save(function(err){
        if (err) res.status(500).send('eita que nao foi')
        else{ res.status(200).send('deu certo, linda')}
    })
 
}

const filtro = (req, res) => {
    const parametros = req.query

    filmes.find(parametros, function(err, filme){
        if(err){ res.status(500).send('erroou')}
        else{ res.status(200).send(filme)}
    })
}

module.exports = {
    getAll, 
    postFilmes,
    filtro
}