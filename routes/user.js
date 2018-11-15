const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Persona = require('../models/persona');

router.post('/signup', (req, res, next) =>{
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length >= 1){
            res.status(409).json({
                message: 'email exists'
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
                        fndocumento: req.body.fndocumento,
                        password: hash
                    })
                    const persona = new Persona({
                        ftdocumento: req.body.ftdocumento,
                        fndocumento: req.body.fndocumento,
                        fnombre: req.body.fnombre,
                        fapellido: req.body.fapellido, 
                        fgenero: req.body.fgenero,
                        fcorreo: req.body.email
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
                            message: 'User creado'
                        });
                    })
                    .catch(err =>{
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            });
        }
    });
});

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
                return res.status(200).json({
                    message: "Auth successful",
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

module.exports = router;