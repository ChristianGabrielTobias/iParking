const express = require('express');
const { ArduinoDataTemp } = require('./newserial')
const router = express.Router();
const db = require('./connection');



router.get('/', (request, response, next) => {

    let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataTemp.List.length).toFixed(2);

    response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
    });

});

router.post('/sendData', (request, response) => {
   var proximidade = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];
    console.log(proximidade);


    // var sql = `insert into medida(statusVaga, dataRegistro) values(${proximidade}, current_timestamp()); `
    // var sql = `insert into medida(statusVaga, dataRegistro) values(${proximidade}, current_timestamp()); `

    var sql = `update medida set statusVaga = ${proximidade}, dataRegistro = current_timestamp() where idSensor = 1`

    
    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });
    response.sendStatus(200);
})

router.post('/sendData2', (request, response) => {
    var proximidade2 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 2];
     console.log(proximidade2);
 
 
     // var sql = `insert into medida(statusVaga, dataRegistro) values(${proximidade}, current_timestamp()); `
     // var sql = `insert into medida(statusVaga, dataRegistro) values(${proximidade}, current_timestamp()); `
 
     var sql = `update medida set statusVaga = ${proximidade2}, dataRegistro = current_timestamp() where idSensor = 2`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData3', (request, response) => {
    var proximidade3 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 3];
     console.log(proximidade3);
 
 
     // var sql = `insert into medida(statusVaga, dataRegistro) values(${proximidade}, current_timestamp()); `
     // var sql = `insert into medida(statusVaga, dataRegistro) values(${proximidade}, current_timestamp()); `
 
     var sql = `update medida set statusVaga = ${proximidade3}, dataRegistro = current_timestamp() where idSensor = 3`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })


module.exports = router;