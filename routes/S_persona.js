var express = require('express');
var router = express.Router();
var formulario = require("../campos/formulario.json");
const mongoose = require('mongoose');

const Persona = require('../models/persona');

/* GET persona page. */
router.get('/', function(req, res, next) {
  res.render('S_persona', { form: 'Sección persona' , campos : formulario});
});

/** GET formulario persona */
router.get('/list', function(req, res){
  const fnombre = req.params.list;
  Persona.findById({fnombre : fnombre})
    .exec()
    .then(doc => {
      console.log("from database", doc);
      if(doc){
        res.status(200).json(doc);
      }
      else{
        res.status(404).json({message: "nombre no valido"});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error : err});
    });
});

/** POST formulario persona */
router.post('/formpersona', function(req, res){
  const persona = new Persona({
    ftdocumento: req.body.ftdocumento,
    fndocumento: req.body.fndocumento,
    fnombre: req.body.fnombre,
    fapellido: req.body.fapellido, 
    fgenero: req.body.fgenero,
    ffechanacimiento: req.body.ffechanacimiento,
    fpaisnacimiento: req.body.fpaisnacimiento,
    fciudadnacimiento: req.body.fciudadnacimiento,
    fedad: req.body.fedad,
    fcelular: req.body.fcelular,
    fcorreo: req.body.fcorreo,
    fniveleducativo: req.body.fniveleducativo,
    festadocivil: req.body.festadocivil,
    fetnia: req.body.fetnia,
    freligion: req.body.freligion,
    focupacion: req.body.focupacion,
    fhorastsemanal: req.body.fhorastsemanal,
    fingresomensual: req.body.fingresomensual,
    ftiemporesidencia: req.body.ftiemporesidencia
  });
  persona
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Post /formpersona",
        createPersona: result
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    });
});


/**update person */
router.patch('/formpersona',(req, res, next)=>{
  const id = req.body.fndocumento;
  Persona.update({fndocumento: id},{$set: {
    ffechanacimiento: req.body.ffechanacimiento,
    fpaisnacimiento: req.body.fpaisnacimiento,
    fciudadnacimiento: req.body.fciudadnacimiento,
    fedad: req.body.fedad,
    fcelular: req.body.fcelular,
    fniveleducativo: req.body.fniveleducativo,
    festadocivil: req.body.festadocivil,
    fetnia: req.body.fetnia,
    freligion: req.body.freligion,
    focupacion: req.body.focupacion,
    fhorastsemanal: req.body.fhorastsemanal,
    fingresomensual: req.body.fingresomensual,
    ftiemporesidencia: req.body.ftiemporesidencia
  }})
  .exec()
  .then(result =>{
    console.log(result);
      res.status(201).json(result);
  })
  .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
  });
});

module.exports = router;
