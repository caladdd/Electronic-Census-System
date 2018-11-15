const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    ftdocumento : {type: String, required: true},
    fndocumento : {type: String, required: true},
    fnombre : {type: String, required: true},
    fapellido : {type: String, required: true},
    fgenero : {type: String, required: true},
    ffechanacimiento : {type: String, default: ""},
    fpaisnacimiento : {type: String, default: ""},
    fciudadnacimiento: {type: String, default: ""},
    fedad : {type: Number, default: ""},
    fcelular : {type: Number, default: ""},
    fcorreo : {type: String, required: true},
    fniveleducativo : {type: String, default: ""},
    festadocivil : {type: String, default: ""},
    fetnia : {type: String, default: ""},
    freligion : {type: String, default: ""},
    focupacion : {type: String, default: ""},
    fhorastsemanal : {type: Number, default: ""},
    fingresomensual : {type: Number, default: ""},
    ftiemporesidencia : {type: String, default: ""}
});

module.exports = mongoose.model('Persona', personaSchema);
