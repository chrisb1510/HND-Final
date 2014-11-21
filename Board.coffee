module.exports = class Board
	constructor:(@gameId,numOfSpaces,@players)->
		@Spaces = {} 
		@coinLimits =
			lowerLimit:1
			upperLimit:10

		@Spaces = for [1..numOfSpaces]
			coinAmount = Math.floor(Math.random()*(@coinLimits.upperLimit - @coinLimits.lowerLimit) + @coinLimits.lowerLimit) 
			@Spaces[_i] = 
				num: _i
				text: "space#{_i}"
				coins: coinAmount	

		

		

