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
    let data_agora = new Date();

    var hora = (Math.random()*24).toFixed();
    var min = (Math.random()*59).toFixed();
    var seg = (Math.random()*59).toFixed();
    console.log(hora);
    

    // var sql = `INSERT INTO sensor(statusVaga) VALUES(${proximidade})`;
    var sql = `insert into medida(statusVaga, horaEntrada) values(${proximidade}, '${hora}:${min}:${seg}'); `

    db.query(sql, function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });
    response.sendStatus(200);
})


module.exports = router;