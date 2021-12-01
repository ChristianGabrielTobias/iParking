var database = require("../database/config");

function buscarUltimasMedidas(teste, statusVaga,limite_linhas) {
    instrucaoSql = `select statusVaga, dataRegistro from medida order by idSensor desc limit 7;`
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(statusVaga, limite_linhas) {
    instrucaoSql = `select statusVaga, dataRegistro from medida order by idSensor desc limit 7;`;
                    
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
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