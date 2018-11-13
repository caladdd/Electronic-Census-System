var express = require('express');
var router = express.Router();
const Vivienda = require('../models/vivienda');

/* GET vivienda page. */
router.get('/', function(req, res, next) {
  res.render('S_vivienda', { form: 'Sección vivienda' });
});

/*POST formulario vivienda*/ 
router.post('/formvivienda', function(req, res){
  const vivienda = new Vivienda({
    fdireccion : req.body.fdireccion,
    ftipovivienda : req.body.ftipovivienda,
    fnpersonasvive : req.body.fnpersonasvive,
    festrato : req.body.festrato,
    fhabitaciones : req.body.fhabitaciones,
    fareavivienda : req.body.fareavivienda,
    fidvivienda : req.body.fidvivienda,
    faduenacion : req.body.faduenacion,
    fpagoarriendo : req.body.fpagoarriendo,
    fservicios : req.body.fservicios,
    fpersonasapoyoec : req.body.fpersonasapoyoec
  });
  vivienda
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Post /formvivienda",
        createVivienda: result
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    });
});

module.exports = router;
