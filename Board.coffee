module.exports = class Board
	
	COIN_DEFAULTS =
		lowerLimit:1
		upperLimit:10
	
	constructor:(@gameId,numOfSpaces,@players)->
		@Spaces = {} 
		

		@Spaces = for [1..numOfSpaces]
			coinAmount = ->
				if _i is 1
					value = 0  
				else
					value = Math.floor(Math.random()*(COIN_DEFAULTS.upperLimit - COIN_DEFAULTS.lowerLimit) + COIN_DEFAULTS.lowerLimit)
				value
			@Spaces[_i] = 
				num: _i
				text:"space#{_i}"
				coins:coinAmount()	


	giveCoin:(space,player)->
		
		res = @players[player].coins += @Spaces[space].coins


		

