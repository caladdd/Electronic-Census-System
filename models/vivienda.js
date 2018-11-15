const mongoose = require('mongoose');

const viviendaSchema = mongoose.Schema({
    direccion : String,
    tipovivienda : String,
    npersonasvive : String,
    estrato : String,
    habitaciones : String,
    areavivienda : String,
    idvivienda : String,
    aduenacion : String,
    pagoarriendo : String,
    servicios : String,
    personasapoyoec : String
});

module.exports = mongoose.model('Vivienda', viviendaSchema);