var express = require('express');
var router = express.Router();
var formulario = require("../campos/formulario.json")

/* GET persona page. */
router.get('/', function(req, res, next) {
  res.render('S_persona', { form: 'Sección persona' , campos : formulario});
});

module.exports = router;
