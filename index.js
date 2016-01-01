'use strict'
const express = require('express')
const web = express()
const port = 8080
var server

server = web.listen(port, function() {
	console.log("Servidor arrancado en " + port)
})

web.use('/static', express.static('static'))

web.get("/", function(req, res) {
	res.sendfile("templates/home.html")
})