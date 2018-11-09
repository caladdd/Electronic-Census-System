const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    fnombre : String,
    fapellido : String,
    fgenero : String,
    ffechanacimiento : Number,
    fniveleducativo : String,
    festadocivil : String,
    focupacion : String,
    fetnia : String,
    freligion : String,
    fhorastsemanal : Number,
    fingresomensual : Number,
    fedad : Number,
    fcelular : Number,
    fcorreo : String,
    ftdocumento : String,
    fndocumento : String,
    fpaisnacimiento : String,
    ftiemporesidencia : String
});

module.exports = mongoose.model('Persona', personaSchema);
