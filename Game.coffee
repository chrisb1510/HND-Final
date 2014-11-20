_ = require 'lodash'

module.exports = class Game 
	_GAMECOUNT = 0
	constructor:(@owner,length)->
		@id = _GAMECOUNT++
		
		@players = 
  			1: 
    			user: @owner ?= 1
    			position : 1

		Board = require './Board.coffee'


		length ?= 'short'
		@board = switch length 
			when 'long' then new Board(@id,60,@players)
			when 'medium' then new Board(@id,40,@players)
			when 'short' then new Board(@id,20,@players)
			 
		
	addPlayer:(user)->
		playercount = _.size(@players)
		
		@players[++playercount] = {user:user.id,position:1}
		console.log "player added"
		
	movePlayer:(playerNumber,amount)=>
		
		@players[playerNumber].position += amount
	
	diceRoll:(lowerLimit,upperLimit)=>
		upperLimit ?= 10
		lowerLimit ?= 0
		Math.floor(Math.random()*(upperLimit - lowerLimit) + lowerLimit)
		