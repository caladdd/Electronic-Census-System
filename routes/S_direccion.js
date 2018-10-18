var express = require('express');
var router = express.Router();

/* GET direccion page. */
router.get('/', function(req, res, next) {
  res.render('S_direccion', { form: 'Sección dirección' });
});

module.exports = router;
