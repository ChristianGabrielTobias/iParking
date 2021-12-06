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

// router.post('/entradaSaida', (request, response) => {

 
//     // var entradaD = (Math.random() * 20).toFixed();
//     var entradaH = ((Math.random() ) * 24).toFixed();
//     var entradaMin = (Math.random() * 59).toFixed();
//     var entradaS = (Math.random() * 59).toFixed();

//     var sql = `insert into horario(horaEntrada, fkMedida) values ('2021-12-01 ${entradaH}:${entradaMin}:${entradaS}', 1);`
 
 
     
//      db.query(sql, function(err, result){
//          if(err) throw err;
//          console.log("Medidas inseridas: " + result.affectedRows)
//      });
//      response.sendStatus(200);
//  })

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
 
 

 
     var sql = `update medida set statusVaga = ${proximidade3}, dataRegistro = current_timestamp() where idSensor = 3`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData4', (request, response) => {
    var proximidade4 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 4];
     console.log(proximidade4);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade4}, dataRegistro = current_timestamp() where idSensor = 4`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData5', (request, response) => {
    var proximidade5 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 5];
     console.log(proximidade5);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade5}, dataRegistro = current_timestamp() where idSensor = 5`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData6', (request, response) => {
    var proximidade6 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 6];
     console.log(proximidade6);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade6}, dataRegistro = current_timestamp() where idSensor = 6`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData7', (request, response) => {
    var proximidade7 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 7];
     console.log(proximidade7);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade7}, dataRegistro = current_timestamp() where idSensor = 7`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData8', (request, response) => {
    var proximidade8 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 8];
     console.log(proximidade8);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade8}, dataRegistro = current_timestamp() where idSensor = 8`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData9', (request, response) => {
    var proximidade9 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 9];
     console.log(proximidade9);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade9}, dataRegistro = current_timestamp() where idSensor = 9`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

 router.post('/sendData10', (request, response) => {
    var proximidade10 = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 10];
     console.log(proximidade10);
 
 

 
     var sql = `update medida set statusVaga = ${proximidade10}, dataRegistro = current_timestamp() where idSensor = 10`
 
     
     db.query(sql, function(err, result){
         if(err) throw err;
         console.log("Medidas inseridas: " + result.affectedRows)
     });
     response.sendStatus(200);
 })

module.exports = router;