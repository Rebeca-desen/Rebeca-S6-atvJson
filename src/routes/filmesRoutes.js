const express = require('express')
const router = express.Router()
const controller = require('../controller/filmesController')

router.get('/', controller.getAll)
router.post('/', controller.postFilmes)
router.get('/filtro', controller.filtro)


module.exports = router