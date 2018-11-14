var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET soporte home page. */
router.get('/', function(req, res, next) {
    res.render('soporte');
  //res.render('soporte'/*{ title: 'Express' }*/);
});

/**POST EMAIL */
router.post('/email', function(req, res){
    console.log("h");
    const output = `
    <p>Tienes una nueva petición de usuario</p>
    <h3>Detalles de contacto</h3>
    <ul>
        <li>Nombre: ${req.body.nombre}</li>
        <li>Email: ${req.body.email}</li>
        <li>Celular: ${req.body.celular}</li>
    </ul>
    <h3>Mensaje</h3>
    <p>${req.body.mensaje}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: email, // generated ethereal user
            pass: pass // generated ethereal password
        }
        //tls:{
         //   rejectUnauthorized:false
        //}
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Caladdd 👻" <bolumbia@bolumbia.com>', // sender address
        to: 'juanpablo.calad@gmail.com', // list of receivers
        subject: 'Node', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
});

module.exports = router;