module.exports = class Board
	constructor:(@gameId,numOfSpaces,@players)->
		@Spaces = {}
		console.log players
		for [1..numOfSpaces] 
			@Spaces[_i] = Space:{num:_i,text:"space#{_i}"}	
		

		

