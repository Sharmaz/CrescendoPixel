'use strict'
const express = require('express')
const web = express()
const port = 8888
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
const parser = require('body-parser')

var server

server = web.listen(port, function() {
	console.log('Servidor arrancado en ' + port)
})

web.use('/static', express.static('static'))

web.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

web.use('/apps', express.static('public/apps.html'))
web.use('/web', express.static('public/web.html'))
web.use('/diseno', express.static('public/disenio.html'))
web.use('/marketing', express.static('public/marketing.html'))
web.use('/portafolio', express.static('public/portafolio.html'))
web.use('/contacto', express.static('public/contacto.html'))

web.use( parser.urlencoded({ extended: true }))
web.post('/enviar', function(req, res) {
	var nombre = req.body.nombre
	var mail = req.body.mail
	var mensaje = req.body.mensaje
	var nodemailerMailgun = nodemailer.createTransport(mg(auth));
	nodemailerMailgun.sendMail({
	  from: mail,
	  to: 'irae45@gmail.com', // An array if you have multiple recipients.
	  subject: 'Crescendo Formulario',
	  text: 'Hey, ' + nombre + ' Tiene un mensaje: ' + mensaje
	}, function (err, info) {
	  if (err) {
	    console.log('Error: ' + err);
	  }
	  else {
	    console.log('Response: ' + info);
	  }
	});

	res.send("Nombre " + nombre + " " + mail + " " + mensaje)
})

var auth = {
  auth: {
    api_key: 'key-4cec4805d46b7c935457f2c405b43f5f',
    domain: 'https://api.mailgun.net/v3/crescendopixel.com'
  }
}
/*
 */