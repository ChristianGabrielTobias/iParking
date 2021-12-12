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

    console.log(`Vaga 1`);

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

function condVaga2(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 2`);

    medidaModel.vaga2(statusVaga).then(function (resultado) {
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

function condVaga3(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 3`);

    medidaModel.vaga3(statusVaga).then(function (resultado) {
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

function condVaga4(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 4`);

    medidaModel.vaga4(statusVaga).then(function (resultado) {
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

function condVaga5(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 5`);

    medidaModel.vaga5(statusVaga).then(function (resultado) {
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

function condVaga6(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 6`);

    medidaModel.vaga6(statusVaga).then(function (resultado) {
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

function condVaga7(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 7`);

    medidaModel.vaga7(statusVaga).then(function (resultado) {
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

function condVaga8(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 8`);

    medidaModel.vaga8(statusVaga).then(function (resultado) {
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

function condVaga9(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 9`);

    medidaModel.vaga9(statusVaga).then(function (resultado) {
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

function condVaga10(req, res) {
    var statusVaga = req.params.statusVaga;

    console.log(`Vaga 10`);

    medidaModel.vaga10(statusVaga).then(function (resultado) {
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
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    condVaga,
    condVaga2,
    condVaga3,
    condVaga4,
    condVaga5,
    condVaga6,
    condVaga7,
    condVaga8,
    condVaga9,
    condVaga10
}