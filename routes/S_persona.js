var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var formulario = require("../campos/formulario.json");

const Persona = require('../models/persona');

/* GET persona page. */
router.get('/', function(req, res, next) {
  res.render('S_persona', { form: 'Sección persona' , campos : formulario});
});

// get mongo

router.get('/list', function(req, res){
  //Url list
  const nombre = req.params.list;
  Persona.findById({nombre : nombre})
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

  //var MongoClient = mongodb.MongoClient;
  //var url = 'mongodb://localhost:27017/sampsite';
  //MongoClient.connect(url, function(err, db){
  //  if(err){
  //    console.log("Unable to connect to the server ", err);
  //  }else{
  //    console.log("Connection Established ");
  //    var collection = db.collection('students')
  //    collection.find({}).toArray(function(err, result){
  //      if(err){
  //        res.send(err);
  //      }else if(result.length){
  //        res.render('studenlist', {
  //          'studenlist' : result
  //        });
  //      }else{
  ///        res.send('No documents found')
  //      }
  //      db.close();
  //    });
  //  }
  //});
});

router.post('/addStudent', function(req, res){
  //var MongoClient = mongodb.MongoClient;
  //var url = 'mongodb://localhost:27017/sampsite';
  //MongoClient.connect(url, function(err, db){
  //  if(err){
  //    console.log("Unable to connect to the server ", err);
  //  }else{
  //    console.log("Connection Established ");

  //    var collection = db.collection('students');

  //    var student = { nombre: req.body.Nombre, edad: req.body.Edad, 
  //      ciudad: req.body.Ciudad, celular: req.body.Celular };
  //    collection.insert([student], function(err, result){
  //      if(err){
  //        console.log(err);
  //      }else{
  //        res.redirect('list');
  //      }
  //      db.close();
  //    });
  //  }
  //});

  const persona = new Persona({
    nombre: req.body.Nombre,
    edad: req.body.Edad, 
    ciudad: req.body.Ciudad,
    celular: req.body.Celular
  });

  persona
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Post /addstudent",
        createPersona: result
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({error: err})
    });
    

});

module.exports = router;
