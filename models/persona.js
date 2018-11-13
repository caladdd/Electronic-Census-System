const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    ftdocumento : String,
    fndocumento : String,
    fnombre : String,
    fapellido : String,
    fgenero : String,
    ffechanacimiento : String,
    fpaisnacimiento : String,
    fciudadnacimiento: String,
    fedad : Number,
    fcelular : Number,
    fcorreo : String,
    fniveleducativo : String,
    festadocivil : String,
    fetnia : String,
    freligion : String,
    focupacion : String,
    fhorastsemanal : Number,
    fingresomensual : Number,
    ftiemporesidencia : String
});

module.exports = mongoose.model('Persona', personaSchema);
