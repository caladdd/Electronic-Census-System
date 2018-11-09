const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    nombre : String,
    edad : Number,
    ciudad : String,
    celular : Number
});

module.exports = mongoose.model('Persona', personaSchema);
