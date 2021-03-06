const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Persona = require('../models/persona');

/* GET signup page. */
router.get('/signup', function(req, res, next) {
    res.render('signup');
  });

/** POST signup */
router.post('/signup', (req, res, next) =>{
    console.log(req.body);
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length >= 1){
            res.status(409).json({
                message: 'Email ya existente'
            });
        }else{
            User.find({ndocumento: req.body.ndocumento})
            .exec()
            .then(user =>{
                if(user.length >= 1){
                    res.status(409).json({
                        message: 'Documento ya existente'
                    });
                }else{
                    bcrypt.hash(req.body.password, 10, (err, hash) =>{
                        if(err){
                            return res.status(500).json({
                                error: err
                            });
                        } else{
                            const user = new User({
                                email: req.body.email,
                                ndocumento: req.body.ndocumento,
                                password: hash
                            })
                            const persona = new Persona({
                                tdocumento: req.body.tdocumento,
                                ndocumento: req.body.ndocumento,
                                nombre: req.body.nombre,
                                apellido: req.body.apellido, 
                                genero: req.body.genero,
                                correo: req.body.email
                              });      
                            user
                            .save()
                            .then(result => {
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
                                console.log(result);
                                res.status(201).json({
                                    message: 'Usuario creado'
                                });
                                //res.render('index');
                            })
                            .catch(err =>{
                                console.log(err);
                                res.status(500).json({
                                    error: "Email o número de identidad ya en uso"
                                });
                            });
                        }
                    });
                }
            })
            .catch(err =>{
                console.log(err);
                res.status(500).json({
                    error: "Email o número de identidad ya en uso"
                });
            }); 
        }
    });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
    res.render('login');
  });

/**POST login */
router.post('/login',(req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length < 1){
            return res.status(401).json({
                message: 'autentificación fallo'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
            if(err){
                return res.status(401).json({
                    message: 'autentificación fallo'
                }); 
            }
            if (result) {
                const token = jwt.sign({
                    email: user[0].email
                },
                'secret',
                {
                    expiresIn: "1h"
                });
                //res.setHeader('authorization', 'Bearer '+ token);
                return res.status(200).json({
                    message: "Auth successful",
                    id: user[0].ndocumento,
                    token: token,
                    tipo: user[0].tipo
                  });
            }
            return res.status(401).json({
                message: 'autentificación fallo'
            }); 
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

/**DELETE user */
router.delete("/:userID", (req, res, next) => {
    const id = req.params.userID;
    User.remove({ ndocumento: id })
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