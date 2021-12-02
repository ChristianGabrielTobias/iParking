var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");
var medidaModel = require("../models/medidaModel")

router.get("/ultimas", function(req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ocupada", function(req, res) {
    medidaController.condVaga(req, res);
})

// router.get("/ocupada", function(req, res) {
//     medidaModel.vaga1().then(function(ocupada){
//         res.render('ocupada', (ocupada : ocupada);
//     })
// })
  
module.exports = router;