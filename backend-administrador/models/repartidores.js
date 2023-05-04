var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    name: { type: String, required: true},
    authenticated: { type: Boolean, required: true},
    phoneNumber: { type: String, required: true},
    pendiente: mongoose.SchemaTypes.Mixed,
    historial: mongoose.SchemaTypes.Mixed
})

module.exports = mongoose.model('repartidores', esquema)