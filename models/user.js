const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    fndocumento : {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tipo: {type: Boolean, default: true}
});


module.exports = mongoose.model('User', userSchema);