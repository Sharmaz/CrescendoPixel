'use strict'
const express = require('express')
const web = express()
var server

server = web.listen(8080, function() {
	console.log("Servidor arrancado")
})

web.get("/", function(req, res) {
	res.sendfile("templates/home.html")
})