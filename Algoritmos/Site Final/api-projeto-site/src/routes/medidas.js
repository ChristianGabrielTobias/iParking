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

router.get("/ocupada2", function(req, res) {
    medidaController.condVaga2(req, res);
})

router.get("/ocupada3", function(req, res) {
    medidaController.condVaga3(req, res);
})

router.get("/ocupada4", function(req, res) {
    medidaController.condVaga4(req, res);
})

router.get("/ocupada5", function(req, res) {
    medidaController.condVaga5(req, res);
})

router.get("/ocupada6", function(req, res) {
    medidaController.condVaga6(req, res);
})

router.get("/ocupada7", function(req, res) {
    medidaController.condVaga7(req, res);
})

router.get("/ocupada8", function(req, res) {
    medidaController.condVaga8(req, res);
})

router.get("/ocupada9", function(req, res) {
    medidaController.condVaga9(req, res);
})

router.get("/ocupada10", function(req, res) {
    medidaController.condVaga10(req, res);
})
// router.get("/ocupada", function(req, res) {
//     medidaModel.vaga1().then(function(ocupada){
//         res.render('ocupada', (ocupada : ocupada);
//     })
// })
  
module.exports = router;