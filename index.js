'use strict'
const express = require('express')
const web = express()
const port = 8080
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