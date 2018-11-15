const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    tdocumento : {type: String, required: true},
    ndocumento : {type: String, required: true},
    nombre : {type: String, required: true},
    apellido : {type: String, required: true},
    genero : {type: String, required: true},
    fechanacimiento : {type: String, default: ""},
    paisnacimiento : {type: String, default: ""},
    ciudadnacimiento: {type: String, default: ""},
    edad : {type: Number, default: ""},
    celular : {type: Number, default: ""},
    correo : {type: String, required: true},
    niveleducativo : {type: String, default: ""},
    estadocivil : {type: String, default: ""},
    etnia : {type: String, default: ""},
    religion : {type: String, default: ""},
    ocupacion : {type: String, default: ""},
    horastsemanal : {type: Number, default: ""},
    ingresomensual : {type: Number, default: ""},
    tiemporesidencia : {type: String, default: ""}
});

module.exports = mongoose.model('Persona', personaSchema);
