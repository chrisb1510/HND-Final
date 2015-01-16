

module.exports = class @User
	_USERCOUNT = 0
	constructor:(@name)->
		@id = _USERCOUNT++
		@name ?= "user#{@id}"
		@coinsTotal = 0
	createGame:(length)=>
		Game = require('./Game.coffee')
		game = new Game(@id,length)
		console.log "game is created"
		return game


 