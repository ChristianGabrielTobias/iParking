var database = require("../database/config");

function buscarUltimasMedidas(teste, statusVaga,limite_linhas) {
    instrucaoSql = `select idSensor, statusVaga, dataRegistro from medida order by idSensor desc limit 10;`
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(statusVaga, limite_linhas) {
    instrucaoSql = `select idSensor, statusVaga, dataRegistro from medida order by idSensor desc limit 10;`;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

function vaga1(instrucaoSql){

    instrucaoSql = `select statusVaga from medida where idSensor = 1`
    return database.executar(instrucaoSql);
}

function vaga2(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 2`
    return database.executar(instrucaoSql);
}

function vaga3(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 3`
    return database.executar(instrucaoSql);
}

function vaga4(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 4`
    return database.executar(instrucaoSql);
}

function vaga5(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 5`
    return database.executar(instrucaoSql);
}

function vaga6(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 6`
    return database.executar(instrucaoSql);
}

function vaga7(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 7`
    return database.executar(instrucaoSql);
}

function vaga8(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 8`
    return database.executar(instrucaoSql);
}

function vaga9(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 9`
    return database.executar(instrucaoSql);
}

function vaga10(instrucaoSql){
    instrucaoSql = `select statusVaga from medida where idSensor = 10`
    return database.executar(instrucaoSql);
}
module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    vaga1,
    vaga2,
    vaga3,
    vaga4,
    vaga5,
    vaga6,
    vaga7,
    vaga8,
    vaga9,
    vaga10
}

// select temperatura, 
//                             umidade, 
//                             DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                             fk_aquario 
//                             from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1

// `select 
//                         temperatura, 
//                         umidade, 
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                         from medida
//                         where fk_aquario = ${idAquario}
//                         order by id desc limit ${limite_linhas}`;