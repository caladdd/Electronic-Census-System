var express = require('express');
var router = express.Router();

/* GET vivienda page. */
router.get('/', function(req, res, next) {
  res.render('S_vivienda', { form: 'Sección vivienda' });
});

module.exports = router;
