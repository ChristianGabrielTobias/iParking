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
console.log(vaga1())


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    vaga1
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