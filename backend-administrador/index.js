var express = require('express');
var bodyParse = require('body-parser');
var cors = require('cors');

var repartidoresRouter = require('./routers/repartidores.router');

var database = require('./modules/database')

var app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));

app.use('/repartidores',  repartidoresRouter)

app.get('/',function(req,res){
    res.send('Servidor en linea')
})

app.listen(8888,  function(){
    console.log('Servidor levantado')
})