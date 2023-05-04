var express = require('express');
var router = express.Router();
var repartidores = require('../models/repartidores');

// obtener a todos los repartidores
router.get('/', function(req, res){ 
    repartidores.find().then(result =>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    })
})

// Eliminar un repartidor
router.delete('/:id', function(req, res){
    repartidores.deleteOne({_id: req.params.id}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//validar un usuario
router.put('/:id', function(req, res){
    repartidores.updateOne({_id: req.params.id}, {authenticated: true}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;