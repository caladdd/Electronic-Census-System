var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var formulario = require("../campos/formulario.json");

/* GET persona page. */
router.get('/', function(req, res, next) {
  res.render('S_persona', { form: 'Sección persona' , campos : formulario});
});

// get mongo

router.get('/list', function(req, res){
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/sampsite';
  MongoClient.connect(url, function(err, db){
    if(err){
      console.log("Unable to connect to the server ", err);
    }else{
      console.log("Connection Established ");
      var collection = db.collection('students')
      collection.find({}).toArray(function(err, result){
        if(err){
          res.send(err);
        }else if(result.length){
          res.render('studenlist', {
            'studenlist' : result
          });
        }else{
          res.send('No documents found')
        }
        db.close();
      });
    }
  });
});

router.post('/addStudent', function(req, res){
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/sampsite';
  MongoClient.connect(url, function(err, db){
    if(err){
      console.log("Unable to connect to the server ", err);
    }else{
      console.log("Connection Established ");

      var collection = db.collection('students');

      var student = { nombre: req.body.Nombre, apellido: req.body.Apellido, genero: req.body.Genero, fecha: req.body.Fecha,
        nivel: req.body.Nivel, estado: req.body.Estado };
      collection.insert([student], function(err, result){
        if(err){
          console.log(err);
        }else{
          res.redirect('list'); 
        }
        db.close();
      });
    }
  });
});

module.exports = router;
