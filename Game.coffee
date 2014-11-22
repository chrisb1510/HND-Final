_ = require 'lodash'

module.exports = class Game 
	_GAMECOUNT = 0
	constructor:(@owner,length)->
		@id = _GAMECOUNT++
		
		@players = 
  			1: 
    			user: @owner ?= 1
    			position : 1
    			coins:0

		Board = require './Board.coffee'


		length ?= 'short'
		@board = switch length 
			when 'long' then new Board(@id,60,@players)
			when 'medium' then new Board(@id,40,@players)
			when 'short' then new Board(@id,20,@players)
			 
	
	diceRoll:(lowerLimit,upperLimit)=>
		lowerLimit ?= 0
		upperLimit ?= 10
		
		Math.floor(Math.random()*
			(upperLimit - lowerLimit) + lowerLimit)
		
	
	addPlayer:(user)->
		playercount = _.size(@players)
		
		@players[++playercount] = 

			user:		user.id
			position:	1
			coins:		0

		console.log "player added"
		
	movePlayer:(playerNumber,amount)=>
		amount ?= @diceRoll()
		@players[playerNumber].position += amount
		position = @players[playerNumber].position
		oldCoins = @players[playerNumber].coins
		@board.giveCoin(position,playerNumber)
		console.log "Player #{playerNumber} moved #{amount} spaces\n 
		 and received #{@board.Spaces[position].coins} coins"
	
	
	
		