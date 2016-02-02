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

web.post('/enviar', function(req, res){
		console.log(req.headers.referer)
		res.end()
	})

	//web.post('/contacto', function(req, res) {
	// 	var auth = {
	//   auth: {
	//     api_key: 'key-4cec4805d46b7c935457f2c405b43f5f',
	//     domain: 'crescendopixel.com'
	//   }
	// }
	// 	var nombre = req.body.nombre
	// 	var mail = req.body.mail
	// 	var mensaje = req.body.mensaje
	// 	var nodemailerMailgun = nodemailer.createTransport(mg(auth));
	// 	nodemailerMailgun.sendMail({
	// 	  from: mail,
	// 	  to: 'irae45@gmail.com', // An array if you have multiple recipients.
	// 	  subject: 'Crescendo Formulario',
	// 	  text: 'Hey, ' + nombre + ' Tiene un mensaje: ' + mensaje
	// 	}, function (err, info) {
	// 	  if (err) {
	// 	  	res.status(500).json({
	// 	  		error: 'No fue posible enviar en estos momentos :('
	// 	  	})
	// 	    console.log('Error: ' + err);
	// 	  }
	// 	  else {
	// 	  	res.status(200).json({
	// 	  		message: 'Listo, mensaje enviado :)'
	// 	  	})
	// 	    console.log('Response: ' + info);
	// 	  }
	// 	});
//})