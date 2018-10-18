var express = require('express');
var router = express.Router();

/* GET retroalimentacion page. */
router.get('/', function(req, res, next) {
  res.render('S_retroalimentacion', { form: 'Sección retroalimentación' });
});

module.exports = router;
