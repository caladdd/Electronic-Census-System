const mongoose = require('mongoose');

const viviendaSchema = mongoose.Schema({
    fdireccion : String,
    ftipovivienda : String,
    fnpersonasvive : String,
    festrato : String,
    fhabitaciones : String,
    fareavivienda : String,
    fidvivienda : String,
    faduenacion : String,
    fpagoarriendo : String,
    fservicios : String,
    fpersonasapoyoec : String
});

module.exports = mongoose.model('Vivienda', viviendaSchema);