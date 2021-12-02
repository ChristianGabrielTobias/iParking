var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function(req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real", function(req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ocupada", function(req, res) {
    medidaController.vaga1(req, res);
})
  
module.exports = router;