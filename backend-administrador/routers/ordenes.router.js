var express = require('express');
var router = express.Router();
var ordenes = require('../models/ordenes');

// obtener a todas las ordenes
router.get('/espera', function(req, res){
    ordenes.find({status:0}).then(result =>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

// Todas las ordenes en  camino
router.get('/camino', function(req, res){
    ordenes.find({status:1}).then(result =>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

// Todas las ordenes realizadas
router.get('/entregadas', function(req, res){
    ordenes.find({status:2}).then(result =>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

// cuando un repartidor acepta la orden
router.put('/:_id', function(req, res){

    const {status, idRepartidor, nombreRepartidor} = req.body;

    console.log(status, 'dddd', idRepartidor, 'llll', nombreRepartidor)

    ordenes.updateOne({_id: req.params._id}, {$set: {status: status, idRepartidor: idRepartidor, nombreRepartidor: nombreRepartidor}}).then(result=>{
        res.send(result);
        res.end()
    }).catch(error=>{
        res.send('error');
        res.end()
    })   
})

module.exports = router;