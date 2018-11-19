var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Persona = require('../models/persona');
const User = require('../models/user');

/* GET persona page. */
router.get('/', function(req, res, next) {
  var variable = req.query.valid
  console.log(variable);
  //const fid = 12345678;
  if(variable){
  const fid = variable;
  User.find({ndocumento: fid})
    .exec()
    .then(doc => {
      //console.log("from database", doc);
      if(doc){
        Persona.find({ndocumento: fid})
        .exec()
        .then(persona =>{
          //console.log("from database", persona);
          res.render('S_persona', { form: 'Sección persona', tipo: doc[0].tipo, campos: persona[0]});
        //res.status(200).json(doc);
        });
        
      }
      else{
        res.status(404).json({message: "id no valido"});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error : err});
    });
  }else{
    res.redirect('/');  
  }
  //res.render('S_persona', { form: 'Sección persona'});
});

/** GET formulario persona */
router.get('/:list', function(req, res){
  const fid = req.params.list;
  res.redirect('./?valid=' + fid);
});

/** POST formulario persona */
router.post('/formpersona', function(req, res){
  const persona = new Persona({
    tdocumento: req.body.ftdocumento,
    ndocumento: req.body.fndocumento,
    nombre: req.body.fnombre,
    apellido: req.body.fapellido, 
    genero: req.body.fgenero,
    fechanacimiento: req.body.ffechanacimiento,
    paisnacimiento: req.body.fpaisnacimiento,
    ciudadnacimiento: req.body.fciudadnacimiento,
    edad: req.body.fedad,
    celular: req.body.fcelular,
    correo: req.body.fcorreo,
    niveleducativo: req.body.fniveleducativo,
    estadocivil: req.body.festadocivil,
    etnia: req.body.fetnia,
    religion: req.body.freligion,
    ocupacion: req.body.focupacion,
    horastsemanal: req.body.fhorastsemanal,
    ingresomensual: req.body.fingresomensual,
    tiemporesidencia: req.body.ftiemporesidencia
  });
  persona
    .save()
    .then(result => {
      fid = req.body.idcensador;
      res.redirect('./?valid=' + fid);
      // console.log(result);
      // res.status(201).json({
      //   message: "Post /formpersona",
      //   createPersona: result
      // });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    });
});


/**update person */
router.post('/:list',(req, res, next)=>{
  const id = req.params.list;
  console.log(id);
  Persona.update({ndocumento: id},{$set: {
    fechanacimiento: req.body.ffechanacimiento,
    paisnacimiento: req.body.fpaisnacimiento,
    ciudadnacimiento: req.body.fciudadnacimiento,
    edad: req.body.fedad,
    celular: req.body.fcelular,
    niveleducativo: req.body.fniveleducativo,
    estadocivil: req.body.festadocivil,
    etnia: req.body.fetnia,
    religion: req.body.freligion,
    ocupacion: req.body.focupacion,
    horastsemanal: req.body.fhorastsemanal,
    ingresomensual: req.body.fingresomensual,
    tiemporesidencia: req.body.ftiemporesidencia
  }})
  .exec()
  .then(result =>{
    fid = id;
    res.redirect('./?valid=' + fid);
    // console.log(result);
    //   res.status(201).json(result);
  })
  .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
  });
});

/**DELETE persona */
router.delete("/:PersonaID", (req, res, next) => {
  const id = req.params.PersonaID;
  Persona.remove({ ndocumento: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
