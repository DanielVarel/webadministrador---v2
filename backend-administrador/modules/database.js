var mongoose = require('mongoose');

class DataBase{
    bd = 'ON-GOING'; //ya tenia una con ese nombre y no la queria borrar :V
    port = '27017';     
    host = '127.0.0.1';

    constructor(){  
            mongoose.connect(`mongodb://${this.host}:${this.port}/${this.bd}`)
            .then(result=>console.log('Se conecto a mongodb'))
            .catch(error=>console.log(error));
    }
    
}

module.exports = new DataBase;