var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 10;

    // var idAquario = req.params.idAquario;
    var idSensor = req.params.idSensor;
    var statusVaga = req.params.statusVaga;
    var dataRegistro = req.params.statusVaga;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idSensor, statusVaga, dataRegistro, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {
    var idSensor = req.params.idSensor;
    var statusVaga = req.params.statusVaga;
    var dataRegistro = req.params.dataRegistro;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idSensor, statusVaga, dataRegistro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) { 
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function condVaga(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`sei la`);

    medidaModel.vaga1(statusVaga).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) { 
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


// function mudarCor(req, res) { 
//     var statusVaga = req.params.statusVaga;

//     medidaModel.vaga1(instrucaoSql).then((messege) => {
//         vaga_1.style.backgrounColor = 'red'
//     }
        
// }

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    condVaga

}