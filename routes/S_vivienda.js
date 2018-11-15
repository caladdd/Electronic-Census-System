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
    direccion : req.body.fdireccion,
    tipovivienda : req.body.ftipovivienda,
    npersonasvive : req.body.fnpersonasvive,
    estrato : req.body.festrato,
    habitaciones : req.body.fhabitaciones,
    areavivienda : req.body.fareavivienda,
    idvivienda : req.body.fidvivienda,
    aduenacion : req.body.faduenacion,
    pagoarriendo : req.body.fpagoarriendo,
    servicios : req.body.fservicios,
    personasapoyoec : req.body.fpersonasapoyoec
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
