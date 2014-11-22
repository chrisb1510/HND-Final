if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["Board.coffee"]) {
    _$jscoverage["Board.coffee"] = [];
    _$jscoverage["Board.coffee"][1] = 0;
    _$jscoverage["Board.coffee"][3] = 0;
    _$jscoverage["Board.coffee"][7] = 0;
    _$jscoverage["Board.coffee"][8] = 0;
    _$jscoverage["Board.coffee"][11] = 0;
    _$jscoverage["Board.coffee"][12] = 0;
    _$jscoverage["Board.coffee"][13] = 0;
    _$jscoverage["Board.coffee"][14] = 0;
    _$jscoverage["Board.coffee"][16] = 0;
    _$jscoverage["Board.coffee"][17] = 0;
    _$jscoverage["Board.coffee"][21] = 0;
    _$jscoverage["Board.coffee"][23] = 0;
    _$jscoverage["Board.coffee"][29] = 0;
    _$jscoverage["Board.coffee"][30] = 0;
    _$jscoverage["Board.coffee"][31] = 0;
}

_$jscoverage["Board.coffee"].source = ["module.exports = class Board", "	", "	COIN_DEFAULTS =", "		lowerLimit:1", "		upperLimit:10", "	", "	constructor:(@gameId,numOfSpaces,@players)->", "		@Spaces = {} ", "		", "", "		@Spaces = for [1..numOfSpaces]", "			coinAmount = ->", "				if _i is 1", "					value = 0  ", "				else", "					value = Math.floor(Math.random()*(COIN_DEFAULTS.upperLimit - COIN_DEFAULTS.lowerLimit) + COIN_DEFAULTS.lowerLimit)", "				value", "			", "", "			", "			@Spaces[_i] = ", "				num: _i", "				text:\"space#{_i}\"", "				coins:coinAmount()	", "", "", "	giveCoin:(space,player)->", "		", "		res = @players[player].coins += @Spaces[space].coins", "		console.log @players[player]		", "		res", "", "		", "", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["Game.coffee"]) {
    _$jscoverage["Game.coffee"] = [];
    _$jscoverage["Game.coffee"][1] = 0;
    _$jscoverage["Game.coffee"][3] = 0;
    _$jscoverage["Game.coffee"][4] = 0;
    _$jscoverage["Game.coffee"][5] = 0;
    _$jscoverage["Game.coffee"][6] = 0;
    _$jscoverage["Game.coffee"][8] = 0;
    _$jscoverage["Game.coffee"][14] = 0;
    _$jscoverage["Game.coffee"][17] = 0;
    _$jscoverage["Game.coffee"][18] = 0;
    _$jscoverage["Game.coffee"][19] = 0;
    _$jscoverage["Game.coffee"][20] = 0;
    _$jscoverage["Game.coffee"][21] = 0;
    _$jscoverage["Game.coffee"][25] = 0;
    _$jscoverage["Game.coffee"][26] = 0;
    _$jscoverage["Game.coffee"][28] = 0;
    _$jscoverage["Game.coffee"][29] = 0;
    _$jscoverage["Game.coffee"][33] = 0;
    _$jscoverage["Game.coffee"][35] = 0;
    _$jscoverage["Game.coffee"][41] = 0;
    _$jscoverage["Game.coffee"][44] = 0;
    _$jscoverage["Game.coffee"][45] = 0;
    _$jscoverage["Game.coffee"][46] = 0;
    _$jscoverage["Game.coffee"][47] = 0;
    _$jscoverage["Game.coffee"][48] = 0;
    _$jscoverage["Game.coffee"][49] = 0;
    _$jscoverage["Game.coffee"][50] = 0;
}

_$jscoverage["Game.coffee"].source = ["_ = require 'lodash'", "", "module.exports = class Game ", "	_GAMECOUNT = 0", "	constructor:(@owner,length)->", "		@id = _GAMECOUNT++", "		", "		@players = ", "  			1: ", "    			user: @owner ?= 1", "    			position : 1", "    			coins:0", "", "		Board = require './Board.coffee'", "", "", "		length ?= 'short'", "		@board = switch length ", "			when 'long' then new Board(@id,60,@players)", "			when 'medium' then new Board(@id,40,@players)", "			when 'short' then new Board(@id,20,@players)", "			 ", "	", "	diceRoll:(lowerLimit,upperLimit)=>", "		lowerLimit ?= 0", "		upperLimit ?= 10", "		", "		Math.floor(Math.random()*", "			(upperLimit - lowerLimit) + lowerLimit)", "		", "	", "	addPlayer:(user)->", "		playercount = _.size(@players)", "		", "		@players[++playercount] = ", "", "			user:		user.id", "			position:	1", "			coins:		0", "", "		console.log \"player added\"", "		", "	movePlayer:(playerNumber,amount)=>", "		amount ?= @diceRoll()", "		@players[playerNumber].position += amount", "		position = @players[playerNumber].position", "		oldCoins = @players[playerNumber].coins", "		@board.giveCoin(position,playerNumber)", "		console.log \"Player #{playerNumber} moved #{amount} spaces\\n ", "		 and received #{@board.Spaces[position].coins} coins\"", "	", "	", "	", "		"];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["User.coffee"]) {
    _$jscoverage["User.coffee"] = [];
    _$jscoverage["User.coffee"][3] = 0;
    _$jscoverage["User.coffee"][4] = 0;
    _$jscoverage["User.coffee"][5] = 0;
    _$jscoverage["User.coffee"][6] = 0;
    _$jscoverage["User.coffee"][7] = 0;
    _$jscoverage["User.coffee"][9] = 0;
    _$jscoverage["User.coffee"][10] = 0;
    _$jscoverage["User.coffee"][11] = 0;
    _$jscoverage["User.coffee"][12] = 0;
}

_$jscoverage["User.coffee"].source = ["", "", "module.exports = class User", "	_USERCOUNT = 0", "	constructor:(@name)->", "		@id = _USERCOUNT++", "		@name ?= \"user#{@id}\"", "	createGame:(length)=>", "		Game = require('./Game.coffee')", "		game = new Game(@id,length)", "		console.log \"game is created\"", "		return game", " "];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["n/c/s/coffeeCoverage.coffee"]) {
    _$jscoverage["n/c/s/coffeeCoverage.coffee"] = [];
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][9] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][11] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][12] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][13] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][14] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][15] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][17] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][20] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][22] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][24] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][31] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][32] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][33] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][34] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][35] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][37] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][38] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][39] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][42] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][45] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][53] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][54] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][55] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][56] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][57] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][90] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][91] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][92] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][94] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][95] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][97] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][99] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][100] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][105] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][108] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][109] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][111] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][112] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][113] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][114] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][116] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][118] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][119] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][120] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][121] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][123] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][124] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][125] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][126] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][128] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][129] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][132] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][133] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][134] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][135] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][137] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][139] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][140] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][141] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][142] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][143] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][145] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][146] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][147] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][148] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][149] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][150] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][151] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][152] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][153] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][155] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][159] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][160] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][161] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][162] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][163] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][164] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][166] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][168] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][174] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][184] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][185] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][188] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][189] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][190] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][194] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][195] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][196] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][199] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][200] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][203] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][204] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][207] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][208] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][209] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][211] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][212] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][214] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][215] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][216] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][218] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][219] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][222] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][223] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][224] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][225] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][226] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][227] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][228] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][230] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][238] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][239] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][240] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][241] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][242] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][243] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][244] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][246] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][253] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][254] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][256] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][257] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][258] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][259] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][261] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][296] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][298] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][300] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][301] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][302] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][303] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][305] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][307] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][309] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][311] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][314] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][315] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][316] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][318] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][319] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][320] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][323] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][324] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][328] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][329] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][330] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][331] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][333] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][334] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][335] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][336] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][337] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][339] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][340] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][341] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][343] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][345] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][347] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][348] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][349] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][351] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][352] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][354] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][356] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][358] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][359] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][360] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][363] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][364] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][365] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][366] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][367] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][368] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][369] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][371] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][388] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][390] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][392] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][393] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][395] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][396] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][398] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][403] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][404] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][405] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][410] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][411] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][438] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][439] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][440] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][442] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][443] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][444] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][445] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][448] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][449] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][450] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][451] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][453] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][455] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][456] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][458] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][461] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][462] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][463] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][465] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][466] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][473] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][474] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][480] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][484] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][485] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][486] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][487] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][488] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][490] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][492] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][494] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][496] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][511] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][512] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][514] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][515] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][517] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][519] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][520] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][522] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][525] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][526] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][530] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][531] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][533] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][536] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][537] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][538] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][539] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][540] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][541] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][542] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][546] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][547] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][549] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][552] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][553] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][554] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][555] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][556] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][557] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][560] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][561] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][563] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][565] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][567] = 0;
    _$jscoverage["n/c/s/coffeeCoverage.coffee"][573] = 0;
}

_$jscoverage["n/c/s/coffeeCoverage.coffee"].source = ["", "#### CoffeeCoverage", "#", "# JSCoverage-style instrumentation for CoffeeScript files.", "#", "# By Jason Walton, Benbria", "#", "", "coffeeScript = require 'coffee-script'", "", "events = require 'events'", "fs = require 'fs'", "util = require 'util'", "path = require 'path'", "path.sep = path.sep || \"/\" # Assume \"/\" on older versions of node, where this is missing.", "", "{startsWith, endsWith, defaults, abbreviatedPath, mkdirs, stripLeadingDotOrSlash, statFile} = require './helpers'", "", "# Add 'version', 'author', and 'contributors' to our exports", "pkginfo = require('pkginfo') module, 'version', 'author', 'contributors'", "", "debug = -> # Do nothing.", "", "EXTENSIONS = {", "    \".coffee\":  {js_extension: \".js\"}", "    \".litcoffee\":  {js_extension: \".js\"}", "    \".coffee.md\":  {js_extension: \".js\"}", "    \"._coffee\": {js_extension: \"._js\"}", "}", "", "class CoverageError extends Error", "    constructor: (@message) ->", "        @name = \"CoverageError\"", "        Error.call this", "        Error.captureStackTrace this, arguments.callee", "", "class StringStream", "    constructor: () ->", "        @data = \"\"", "", "    write: (data) ->", "        @data += data", "", "# Default options.", "defaultOptions =", "    coverageVar: '_$jscoverage'", "    exclude: []", "    recursive: true", "    bare: false", "", "# Return the relative path for the file from the basePath.  Returns file name", "# if the file is not relative to basePath.", "getRelativeFilename = (basePath, fileName) ->", "    relativeFileName = path.resolve fileName", "    if basePath? and startsWith(relativeFileName, basePath)", "        relativeFileName = path.relative basePath, fileName", "    return relativeFileName", "", "", "# Register coffeeCoverage to automatically process '.coffee', '.litcoffee', '.coffee.md' and '._coffee' files.", "#", "# Note if you're using this in conjunction with", "# [streamlinejs](https://github.com/Sage/streamlinejs), you *must* call this function", "# after calling `streamline.register()`, otherwise by the time we get the source the", "# file will already have been compiled.", "#", "# Parameters:", "# * `options.coverageVar` gives the name of the global variable to use to store coverage data in.", "#   This defaults to '_$jscoverage' to be compatible with JSCoverage.", "# * `options.basePath` is the root folder of your project.  This path will be stripped from", "#   file names.", "# * `options.path` should be one of:", "#     * 'relative' - File names will be used as the file name in the instrumented sources.", "#     * 'abbr' - an abbreviated file name will be constructed, with each parent in the path", "#        replaced by the first character in its name.", "#     * null - Path names will be omitted.  Only the base file name will be used.", "# * `options.exclude` is an array of files to ignore.  instrumentDirectory will not instrument", "#   a file if it is in this list, nor will it recursively traverse into a directory if it is", "#   in this list.  This defaults to [] if not explicitly passed.  Note that this option", "#   will only work if `options.basePath` is provided.", "# * `options.streamlinejs` - Enable experimental support for streamlinejs.  This option will", "#   be removed in a future version of coffeeCoverage.", "# * `options.initAll` - If true, then coffeeCoverage will recursively walk through all", "#   subdirectories of `options.basePath` and gather line number information for all CoffeeScript files", "#   found.  This way even files which are not `require`d at any point during your test will still", "#   br instrumented and reported on.", "#", "# e.g. `coffeeCoverage.register {path: 'abbr', basePath: \"#{__dirname}/..\" }`", "#", "exports.register = (options) ->", "    coverage = new exports.CoverageInstrumentor options", "    module = require('module');", "", "    if options.basePath", "        basePath = path.resolve options.basePath", "", "        if options.initAll", "            # Recursively instrument everything in the base path to generate intialization data.", "            initStream = new StringStream()", "            coverage.instrumentDirectory options.basePath, null, {", "                exclude: options.exclude", "                recursive: true", "                initFileStream: initStream", "            }", "            eval initStream.data", "", "    # Return true if we should exclude a file", "    excludeFile = (fileName) ->", "        exclude = options.exclude or []", "", "        excluded = false", "        if basePath", "            relativeFilename = getRelativeFilename basePath, fileName", "            if relativeFilename == fileName", "                # Only instrument files that are inside the project.", "                excluded = true", "", "            components = relativeFilename.split path.sep", "            for component in components", "                if component in exclude", "                    excluded = true", "", "            if !excluded", "                for excludePath in exclude", "                    if startsWith \"/#{relativeFilename}\", excludePath", "                        excluded = true", "", "        if !excluded and (not path.extname(fileName) in Object.keys(EXTENSIONS))", "            excluded = true", "", "", "        if !excluded", "            for excludePath in exclude", "                if startsWith fileName, excludePath", "                    excluded = true", "", "        return excluded", "", "    instrumentFile = (fileName) ->", "        content = fs.readFileSync fileName, 'utf8'", "        coverageFileName = getRelativeFilename basePath, fileName", "        instrumented = coverage.instrumentCoffee coverageFileName, content, options", "        return instrumented.init + instrumented.js", "", "    replaceHandler = (extension) ->", "        origCoffeeHandler = require.extensions[extension]", "        require.extensions[extension] = (module, fileName) ->", "            if excludeFile fileName", "                return origCoffeeHandler.call this, module, fileName", "            module._compile instrumentFile(fileName), fileName", "    replaceHandler \".coffee\"", "    replaceHandler \".litcoffee\"", "    replaceHandler \".coffee.md\"", "", "    if options.streamlinejs", "        # TODO: This is pretty fragile, as we rely on some undocumented parts of streamline_js.", "        # Would be better to do this via some programatic interface to streamline.  Need to make a", "        # pull request.", "        streamline_js = require.extensions[\"._js\"]", "        if streamline_js", "            origStreamineCoffeeHandler = require.extensions[\"._coffee\"]", "            require.extensions[\"._coffee\"] = (module, fileName) ->", "                if excludeFile fileName", "                    return origStreamineCoffeeHandler.call this, module, fileName", "", "                compiled = instrumentFile(fileName)", "                # TODO: Pass a sourcemap here?", "                streamline_js module, fileName, compiled, null", "", "", "#### CoverageInstrumentor", "#", "# Instruments .coffee files to provide code-coverage data.", "class exports.CoverageInstrumentor extends events.EventEmitter", "", "    #### Create a new CoverageInstrumentor", "    #", "    # `options.coverageVar` gives the name of the global variable to use to store coverage data in.", "    # This defaults to '_$jscoverage' to be compatible with JSCoverage.", "    #", "    # Any option which can be passed to instrumentDirectory may also be passed here, and will", "    # serve as a default value.", "    #", "    constructor: (options = {}) ->", "        @options = defaults options, defaultOptions", "", "    # Takes in a string, and returns a quoted string with any \\s and \"s in the string escaped.", "    toQuotedString = (string) ->", "        answer = string.replace /\\\\/g, '\\\\\\\\'", "        return '\"' + (answer.replace /\"/g, '\\\\\\\"') + '\"'", "", "    # Takes the contents of a file and returns an array of lines.", "    # `fileData` is a string containing an entire file.", "    fileToLines = (fileData) ->", "        dataWithFixedLfs = fileData.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n')", "        return dataWithFixedLfs.split(\"\\n\")", "", "    # Return the type of an AST node.", "    nodeType = (node) ->", "        return node?.constructor?.name or null", "", "    # Write a string to a file.", "    writeToFile = (outFile, content) ->", "        fs.writeFileSync outFile, content", "", "    # Some basic valication of source and out files.", "    validateSrcDest = (source, out) ->", "        sourceStat = statFile(source)", "        outStat = if out then statFile(out) else null", "", "        if !sourceStat", "            throw new CoverageError(\"Source file #{source} does not exist.\")", "", "        if outStat", "            if sourceStat.isFile() and outStat.isDirectory()", "                throw new CoverageError(\"Refusing to overwrite directory #{out} with file.\")", "", "            if sourceStat.isDirectory() and outStat.isFile()", "                throw new CoverageError(\"Refusing to overwrite file #{out} with directory.\")", "", "    # Generate a unique file name", "    generateUniqueName = (usedNames, desiredName) ->", "        answer = \"\"", "        suffix = 1", "        while true", "            answer = desiredName + \" (\" + suffix + \")\"", "            if not (answer in usedNames) then break", "            suffix++", "", "        return answer", "", "    #### Instrument a file or directory.", "    #", "    # This calls @instrumentFile or @instrumentDirectory, depending on whether \"source\" is", "    # a file or directory respectively.", "    #", "    # Throws CoverageError if there is a problem with the `source` or `out` parameters.", "    instrument: (source, out, options) ->", "        validateSrcDest source, out", "        sourceStat = statFile source", "        if sourceStat.isFile()", "            return @instrumentFile source, out, options", "        else if sourceStat.isDirectory()", "            return @instrumentDirectory source, out, options", "        else", "            throw new CoverageError(\"Can't instrument #{source}.\")", "", "    # Return the output file name for a given input file name.", "    #", "    # e.g. `getOutputFileName('foo.coffee') # => 'foo.js'`", "    #", "    getOutputFileName: (fileName) ->", "        return null if !fileName?", "        outFile = fileName", "", "        for coffee_extension, ext of EXTENSIONS", "            if endsWith(fileName.toLowerCase(), coffee_extension)", "                outFile = fileName[..-(coffee_extension.length+1)] + ext.js_extension", "                break", "", "        return outFile", "", "", "    #### Instrument a directory.", "    #", "    # This finds all .coffee files in the specified `sourceDirectory`, and writes instrumented", "    # files into `outDirectory`.  `outDirectory` will be created if it does not already exist.", "    #", "    # * `options.recursive` controls whether or not this will descend recursively into", "    #    subdirectories.  This defaults to true if not explicitly passed or specified in the", "    #    constructor.", "    # * `options.exclude` is an array of files to ignore.  instrumentDirectory will not instrument", "    #   a file if it is in this list, nor will it recursively traverse into a directory if it is", "    #   in this list.  This defaults to [] if not explicitly passed or specified in the", "    #   constructor.  Note that this field is case sensitive!", "    # * `options.basePath` if provided, then all excludes will be evaluated relative to this", "    #   base path.  For example, if `options.exclude` is `['a/b']`, and `options.basePath` is", "    #   \"/Users/jwalton/myproject\", then this will prevent coffeeCoverage from traversing", "    #   \"/Users/jwalton/myproject/a/b\".  `basePath` will also be stripped from the front", "    #   of any files when generating names.", "    # * `options.initFileStream` is a stream to which all global initialization will be", "    #   written to via `initFileStream.write(data)`.", "    #", "    # Emits an \"instrumentingDirectory\" event before doing any work, with the names of the source", "    # and out directories.  The directory names are guaranteed to end in path.sep.  Emits a", "    # \"skip\" event for any files which are skipped because they are in the `options.exclude` list.", "    #", "    # Throws CoverageError if there is a problem with the `sourceDirectory` or `outDirectory`", "    # parameters.", "    #", "    # Returns an object consisting of:", "    #  - `lines` - the total number of instrumented lines.", "    #", "    instrumentDirectory: (sourceDirectory, outDirectory, options = {}) ->", "        # Turn the source directory into an absolute path", "        sourceDirectory = path.resolve sourceDirectory", "", "        @emit \"instrumentingDirectory\", sourceDirectory, outDirectory", "", "        options = Object.create options", "        options.usedFileNames = options.usedFileNames || []", "        options.basePath = if options.basePath", "            path.resolve options.basePath", "        else", "            sourceDirectory", "", "        answer = {lines: 0}", "", "        options = defaults options, @options", "", "        validateSrcDest sourceDirectory, outDirectory", "", "        # Make sure the directory names end in \"/\"", "        if !endsWith sourceDirectory, path.sep", "            sourceDirectory += path.sep", "        sourceDirectoryMode = (statFile sourceDirectory).mode", "", "        if outDirectory", "            if !endsWith outDirectory, path.sep", "                outDirectory += path.sep", "", "            # Check to see if the output directory exists", "            outDirectoryStat = statFile outDirectory", "            outputDirectoryExists = !!outDirectoryStat", "", "", "        # Instrument every file in the directory", "        for file in fs.readdirSync(sourceDirectory)", "            skip = false", "            if file in options.exclude", "                skip = true", "", "            sourceFile = sourceDirectory + file", "            relativePath = getRelativeFilename options.basePath, sourceFile", "            if relativePath != sourceFile then for exclude in options.exclude", "                if startsWith relativePath, exclude", "                    skip = true", "", "            if skip", "                @emit \"skip\", sourceDirectory + file", "                continue", "", "            outFile = if outDirectory then outDirectory + file else null", "", "            sourceStat = statFile sourceFile", "", "            if options.recursive and sourceStat.isDirectory()", "                inst = @instrumentDirectory sourceFile, outFile, options", "                answer.lines += inst.lines", "            else", "                processed = false", "                for coffee_extension of EXTENSIONS", "                    # TODO: Make this work for streamline files.", "                    if coffee_extension is '._coffee' then continue", "", "                    if endsWith(file.toLowerCase(), coffee_extension) and sourceStat.isFile()", "                        # lazy-create the output directory.", "                        if outDirectory? and !outputDirectoryExists", "                            mkdirs outDirectory, sourceDirectoryMode", "                            outputDirectoryExists = true", "", "                        # Replace the \".(lit)coffee(.md)\" extension with a \".js\" extension", "                        outFile = @getOutputFileName outFile", "                        instrumentOptions = Object.create options", "                        instrumentOptions.fileName = relativePath", "                        inst = @instrumentFile sourceFile, outFile, instrumentOptions", "                        answer.lines += inst.lines", "                        processed = true", "                        break", "", "        return answer", "", "", "    #### Instrument a .coffee file.", "    #", "    # Same as `@instrumentCoffee` but takes a file name instead of file data.", "    #", "    # Emits an \"instrumentingFile\" event with the name of the input and output file.", "    #", "    # * `outFile` is optional; if present then the compiled JavaScript will be written out to this", "    #   file.", "    # * `options.fileName` is the fileName to use in the generated instrumentation.", "    #", "    # For other options, see `@instrumentCoffee`.", "    #", "    # Throws CoverageError if there is a problem with the `sourceFile` or `outFile` parameters.", "    instrumentFile: (sourceFile, outFile=null, options={}) ->", "        @emit \"instrumentingFile\", sourceFile, outFile", "", "        validateSrcDest sourceFile, outFile", "", "        data = fs.readFileSync sourceFile, 'utf8'", "        answer = @instrumentCoffee (options.fileName or sourceFile), data, options", "", "        if outFile", "            writeToFile outFile, (answer.init + answer.js)", "", "        return answer", "", "    # Fix up location data for each instrumentedLine.  Make these all 0-length,", "    # so we don't have to rewrite the location data for all the non-generated", "    # nodes in the tree.", "    fixLocationData = (instrumentedLine, line) ->", "        doIt = (node) ->", "            node.locationData =", "                first_line: line - 1 # -1 because `line` is 1-based", "                first_column: 0", "                last_line: line - 1", "                last_column: 0", "        doIt instrumentedLine", "        instrumentedLine.eachChild doIt", "", "", "    #### Instrument a .coffee file.", "    #", "    # Parameters:", "    #", "    # * `fileData` is the contents of the coffee file.", "    #", "    # * `options.path` should be one of:", "    #     * 'relative' - `fileName` will be used as the file name in the instrumented sources.", "    #     * 'abbr' - an abbreviated file name will be constructed, with each parent in the path", "    #        replaced by the first character in its name.", "    #     * null - Path names will be omitted.  Only the base file name will be used.", "    #", "    # * If `options.usedFileNames` is present, it must be an array.  This method will add the", "    #   name of the file to usedFileNames.  If the name of the file is already in usedFileNames", "    #   then this method will generate a unique name.", "    #", "    # * If `options.initFileStream` is present, then all global initialization will be written", "    #   to `initFileStream.write()`, in addition to being returned.", "    #", "    # Returns an object consisting of:", "    # * `init` - the intialization JavaScript code.", "    # * `js` - the compiled JavaScript, instrumented to collect coverage data.", "    # * `lines` - the total number of instrumented lines.", "    #", "    instrumentCoffee: (fileName, fileData, options = {}) ->", "        origFileName = fileName", "        literate = /\\.(litcoffee|coffee\\.md)$/.test(fileName)", "", "        switch options.path", "            when 'relative' then fileName = stripLeadingDotOrSlash fileName", "            when 'abbr' then fileName = abbreviatedPath stripLeadingDotOrSlash fileName", "            else fileName = path.basename fileName", "", "        # Generate a unique fileName if required.", "        if options.usedfileNames", "            if fileName in options.usedfileNames", "                fileName = generateUniqueName options.usedfileNames, fileName", "            options.usedfileNames.push fileName", "", "        quotedFileName = toQuotedString fileName", "", "        try", "            ast = coffeeScript.nodes(fileData, {literate: literate})", "        catch err", "            throw new CoverageError(\"Could not parse #{fileName}: #{err.stack}\")", "", "        # Add coverage instrumentation nodes throughout the tree.", "        instrumentedLines = []", "        instrumentTree = (node, parent=null, depth=0) =>", "            debug \"Examining  l:#{node.locationData.first_line + 1} d:#{depth} #{nodeType(node)}\"", "", "            if (nodeType(node) != \"Block\") or node.coffeeCoverageDoNotInstrument", "                if nodeType(node) is \"If\" and node.isChain", "                    # Chaining is where coffee compiles something into `... else if ...`", "                    # instead of '... else {if ...}`.  Chaining produces nicer looking coder", "                    # with fewer indents, but it also produces code that's harder to instrument,", "                    # so we turn it off.", "                    #", "", "                    debug \"  Disabling chaining for if statement\"", "                    node.isChain = false", "", "                    # An alternative to to disable instrumentation on the else node.", "                    #node.elseBody.coffeeCoverageDoNotInstrument = true", "", "                # Recurse into child nodes", "                node.eachChild (child) => instrumentTree(child, node, depth + 1)", "", "            else", "                # If this is a block, then instrument all the lines in the block.", "                children = node.expressions", "                childIndex = 0", "                while childIndex < children.length", "                    expression = children[childIndex]", "                    line = expression.locationData.first_line + 1", "", "                    doAnnotation = true", "", "                    if nodeType(expression) is \"Comment\"", "                        # Don't bother to instrument the comment.", "                        doAnnotation = false", "", "                    if line in instrumentedLines", "                        # Never instrument the same line twice.  This can happen in a situation like:", "                        #", "                        #     if x then console.log \"foo\"", "                        #", "                        # Here the \"if\" statement can be instrumented, but we could also instrument the", "                        # \"console.log\" statement on the same line.", "                        #", "                        # Note that we also run into a weird situation here:", "                        #", "                        #     x = if y then {name: \"foo\"} \\", "                        #              else {name: \"bar\"}", "                        #", "                        # Because here we're going to instrument the inside of the \"else\" block,", "                        # but not the inside of the \"if\" block, which is OK, but a bit weird.", "                        debug \"Skipping   l:#{line} d:#{depth + 1} #{nodeType(expression)}\"", "                        doAnnotation = false", "", "                    if doAnnotation", "                        debug \"Annotating l:#{line} d:#{depth + 1} #{nodeType(expression)}\"", "", "                        instrumentedLines.push line", "", "                        instrumentedLine = coffeeScript.nodes(", "                            \"#{@options.coverageVar}[#{quotedFileName}][#{line}]++\")", "", "                        fixLocationData instrumentedLine, line", "", "                        # Add the new nodes immediately before the statement we're instrumenting.", "                        children.splice(childIndex, 0, instrumentedLine);", "                        childIndex++", "", "                    # Annotate child expressions here, so we don't waste time instrumenting", "                    # our instrumentedLines.", "                    instrumentTree(expression, node, depth + 1)", "                    childIndex++", "", "        instrumentTree(ast)", "", "        # Write out top-level initalization", "        init = \"\"\"", "            if (typeof #{@options.coverageVar} === 'undefined') #{@options.coverageVar} = {};", "            if ((typeof global !== 'undefined') && (typeof global.#{@options.coverageVar} === 'undefined')) {", "                global.#{@options.coverageVar} = #{@options.coverageVar}", "            } else if ((typeof window !== 'undefined') && (typeof window.#{@options.coverageVar} === 'undefined')) {", "                window.#{@options.coverageVar} = #{@options.coverageVar}", "            }", "            if (! #{@options.coverageVar}[#{quotedFileName}]) {", "                #{@options.coverageVar}[#{quotedFileName}] = [];\\n\"\"\"", "", "        for lineNumber in instrumentedLines", "            init += \"    #{@options.coverageVar}[#{quotedFileName}][#{lineNumber}] = 0;\\n\"", "", "        init += \"}\\n\\n\"", "", "        # Write the original source code into the \".source\" array.", "        init += \"#{@options.coverageVar}[#{quotedFileName}].source = [\"", "        fileToInstrumentLines = fileToLines fileData", "        for line, index in fileToInstrumentLines", "            if !!index then init += \", \"", "            init += toQuotedString(line)", "        init += \"];\\n\\n\"", "", "        # Compile the instrumented CoffeeScript and write it to the JS file.", "        try", "            js = ast.compile {bare: options.bare, literate: literate}", "        catch err", "            throw new CoverageError(\"Could not compile #{fileName} after annotating: #{err.stack}\")", "", "        options.initFileStream?.write init", "", "        answer = {", "            init: init", "            js: js", "            lines: instrumentedLines.length", "        }", "", "        return answer", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["n/c/s/command.coffee"]) {
    _$jscoverage["n/c/s/command.coffee"] = [];
    _$jscoverage["n/c/s/command.coffee"][5] = 0;
    _$jscoverage["n/c/s/command.coffee"][6] = 0;
    _$jscoverage["n/c/s/command.coffee"][7] = 0;
    _$jscoverage["n/c/s/command.coffee"][9] = 0;
    _$jscoverage["n/c/s/command.coffee"][10] = 0;
    _$jscoverage["n/c/s/command.coffee"][12] = 0;
    _$jscoverage["n/c/s/command.coffee"][13] = 0;
    _$jscoverage["n/c/s/command.coffee"][15] = 0;
    _$jscoverage["n/c/s/command.coffee"][16] = 0;
    _$jscoverage["n/c/s/command.coffee"][17] = 0;
    _$jscoverage["n/c/s/command.coffee"][24] = 0;
    _$jscoverage["n/c/s/command.coffee"][28] = 0;
    _$jscoverage["n/c/s/command.coffee"][33] = 0;
    _$jscoverage["n/c/s/command.coffee"][34] = 0;
    _$jscoverage["n/c/s/command.coffee"][35] = 0;
    _$jscoverage["n/c/s/command.coffee"][40] = 0;
    _$jscoverage["n/c/s/command.coffee"][41] = 0;
    _$jscoverage["n/c/s/command.coffee"][42] = 0;
    _$jscoverage["n/c/s/command.coffee"][48] = 0;
    _$jscoverage["n/c/s/command.coffee"][52] = 0;
    _$jscoverage["n/c/s/command.coffee"][61] = 0;
    _$jscoverage["n/c/s/command.coffee"][65] = 0;
    _$jscoverage["n/c/s/command.coffee"][70] = 0;
    _$jscoverage["n/c/s/command.coffee"][73] = 0;
    _$jscoverage["n/c/s/command.coffee"][74] = 0;
    _$jscoverage["n/c/s/command.coffee"][76] = 0;
    _$jscoverage["n/c/s/command.coffee"][78] = 0;
    _$jscoverage["n/c/s/command.coffee"][80] = 0;
    _$jscoverage["n/c/s/command.coffee"][81] = 0;
    _$jscoverage["n/c/s/command.coffee"][82] = 0;
    _$jscoverage["n/c/s/command.coffee"][84] = 0;
    _$jscoverage["n/c/s/command.coffee"][85] = 0;
    _$jscoverage["n/c/s/command.coffee"][87] = 0;
    _$jscoverage["n/c/s/command.coffee"][89] = 0;
    _$jscoverage["n/c/s/command.coffee"][90] = 0;
    _$jscoverage["n/c/s/command.coffee"][91] = 0;
    _$jscoverage["n/c/s/command.coffee"][93] = 0;
    _$jscoverage["n/c/s/command.coffee"][94] = 0;
    _$jscoverage["n/c/s/command.coffee"][96] = 0;
    _$jscoverage["n/c/s/command.coffee"][97] = 0;
    _$jscoverage["n/c/s/command.coffee"][101] = 0;
    _$jscoverage["n/c/s/command.coffee"][102] = 0;
    _$jscoverage["n/c/s/command.coffee"][103] = 0;
    _$jscoverage["n/c/s/command.coffee"][105] = 0;
    _$jscoverage["n/c/s/command.coffee"][107] = 0;
    _$jscoverage["n/c/s/command.coffee"][109] = 0;
    _$jscoverage["n/c/s/command.coffee"][112] = 0;
    _$jscoverage["n/c/s/command.coffee"][113] = 0;
    _$jscoverage["n/c/s/command.coffee"][114] = 0;
    _$jscoverage["n/c/s/command.coffee"][116] = 0;
    _$jscoverage["n/c/s/command.coffee"][119] = 0;
    _$jscoverage["n/c/s/command.coffee"][120] = 0;
}

_$jscoverage["n/c/s/command.coffee"].source = ["#!/usr/bin/env coffee", "", "# Implements functionality for the CLI command", "", "fs = require 'fs'", "path = require 'path'", "path.sep = path.sep || \"/\" # Assume \"/\" on older versions of node, where this is missing.", "", "{CoverageInstrumentor, version} = require './coffeeCoverage'", "{stripLeadingDotOrSlash, mkdirs} = require './helpers'", "", "printHelp = () ->", "    console.log usageString", "", "parseArgs = (args) ->", "    ArgumentParser = require('argparse').ArgumentParser", "    parser = new ArgumentParser", "        version: version", "        addHelp: true", "        description: \"\"\"", "            Compiles CoffeeScript into JavaScript with JSCoverage-compatible instrumentation for code coverage.", "            \"\"\"", "", "    parser.addArgument [ '--verbose' ],", "        help: \"Verbose output\"", "        nargs: 0", "", "    parser.addArgument [ '-b', '--bare' ],", "        help: \"compile without a top-level function wrapper\"", "        metavar: \"bare\"", "        nargs: 0", "", "    coverageVarDefault = '_$jscoverage'", "    parser.addArgument [ '-c', '--coverageVar' ],", "        help: \"\"\"Set the name to use in the instrumented code for the coverage variable.  Defaults to", "              '#{coverageVarDefault}'.\"\"\"", "        metavar: \"name\"", "        defaultValue: coverageVarDefault", "", "    excludeDefault = \"node_modules,.git\"", "    parser.addArgument [ '-e', '--exclude' ],", "        help: \"\"\"Comma delimited set of file names to exclude.  Any file or directory which is in", "              this list will be ignored.  Note that this field is case sensitive.  Defaults to", "              '#{excludeDefault}'.\"\"\"", "        metavar: \"filenames\"", "        defaultValue: excludeDefault", "", "    parser.addArgument [ '-i', '--initfile' ],", "        help: \"\"\"Write all global initialization out to 'file'.\"\"\"", "        metavar: \"file\"", "", "    parser.addArgument [ '--path' ],", "        help: \"\"\"Specify how to show the path for each filename in the instrumented output.  If", "          'pathtype' is 'relative', then the relative path will be written to each file.  If", "          'pathtype' is 'abbr', then we replace each directory in the path with its first letter.", "          The default is 'none' which will write only the filename with no path.\"\"\"", "        metavar: \"pathtype\"", "        choices: ['none', 'abbr', 'relative']", "        defaultValue: \"none\"", "", "    parser.addArgument [\"src\"],", "        help: \"A file or directory to instrument.  If this is a directory, then all .coffee \" +", "              \"files in this directory and all subdirectories will be instrumented.\"", "", "    parser.addArgument [\"dest\"],", "        help: \"If src is a file then this must be a file to write the compiled JS code to. \" +", "              \"If src is a directory, then this must be a directory.  This file or directory \" +", "              \"will be created if it does not exist.\"", "", "    options = parser.parseArgs(args)", "", "    # Split exclude into an array.", "    if options.exclude", "        options.exclude = options.exclude.split \",\"", "    else", "        options.exclude = []", "", "    return options", "", "exports.main = (args) ->", "    try", "        options = parseArgs(args[2..])", "", "        if options.bare", "            options.bare = true", "", "        coverageInstrumentor = new CoverageInstrumentor(bare: options.bare)", "", "        if options.verbose", "            coverageInstrumentor.on \"instrumentingFile\", (sourceFile, outFile) ->", "                console.log \"    #{stripLeadingDotOrSlash sourceFile} to #{stripLeadingDotOrSlash outFile}\"", "", "            coverageInstrumentor.on \"instrumentingDirectory\", (sourceDir, outDir) ->", "                console.log \"Instrumenting directory: #{stripLeadingDotOrSlash sourceDir} to #{stripLeadingDotOrSlash outDir}\"", "", "            coverageInstrumentor.on \"skip\", (file) ->", "                console.log \"    Skipping: #{stripLeadingDotOrSlash file}\"", "", "", "        # Change initFile into a output stream", "        if options.initfile", "            mkdirs path.dirname options.initfile", "            options.initFileStream = fs.createWriteStream options.initfile", "", "        result = coverageInstrumentor.instrument options.src, options.dest, options", "", "        options.initFileStream?.end()", "", "        console.log \"Annotated #{result.lines} lines.\"", "", "    catch err", "        if err.constructor.name == \"CoverageError\"", "            console.error \"Error: #{err.message}\"", "            process.exit 1", "        else", "            throw err", "", "", "if require.main == module", "    exports.main(process.argv)", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["n/c/s/helpers.coffee"]) {
    _$jscoverage["n/c/s/helpers.coffee"] = [];
    _$jscoverage["n/c/s/helpers.coffee"][1] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][2] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][3] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][6] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][7] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][10] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][11] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][14] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][15] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][16] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][18] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][19] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][20] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][22] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][24] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][27] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][28] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][29] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][31] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][33] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][36] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][38] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][43] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][45] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][46] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][48] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][49] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][50] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][52] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][54] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][55] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][57] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][58] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][60] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][62] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][65] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][66] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][68] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][70] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][71] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][72] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][74] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][76] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][77] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][78] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][79] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][80] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][81] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][82] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][83] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][85] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][86] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][88] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][90] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][91] = 0;
    _$jscoverage["n/c/s/helpers.coffee"][93] = 0;
}

_$jscoverage["n/c/s/helpers.coffee"].source = ["fs = require 'fs'", "path = require 'path'", "path.sep = path.sep || \"/\" # Assume \"/\" on older versions of node, where this is missing.", "", "# Returns true if `str` starts with `prefix`", "exports.startsWith = (str, prefix) ->", "    return str[..(prefix.length-1)] == prefix", "", "# Returns true if `str` ends with `suffix`", "exports.endsWith = (str, suffix) ->", "    return str[-(suffix.length) ..] == suffix", "", "# Shallow copy all properties of src to dest, but only if those properties don't exist on dest.", "exports.defaults = (dest, src) ->", "    if not dest", "        dest = {}", "", "    for key, val of src", "        if not (key of dest)", "            dest[key] = val", "", "    return dest", "", "exports.stripLeadingDotOrSlash = (pathName) -> pathName.replace(/^\\//, \"\").replace(/^\\.\\//, \"\")", "", "# Get details about a file.  Returns a fs.Stats object, or null if the file does not exist.", "exports.statFile = statFile = (file) ->", "    try", "        answer = fs.statSync(file)", "    catch err", "        if 'code' of err and err.code is 'ENOENT'", "            # File does not exist", "            answer = null", "        else", "            # Some other weird error - throw it.", "            throw err", "", "    return answer", "", "# Creates the directory supplied by `dirPath`, creating any intermediate directories as", "# required.  For example, `mkdirs('a/b/c')` might create the directory 'a', then 'a/b', then", "# 'a/b/c'.", "exports.mkdirs = (dirPath, mode) ->", "    # Short-circuit if path already exists", "    if not statFile dirPath", "        pathElements = dirPath.split path.sep", "", "        currentPath = \"\"", "        for pathElement in pathElements", "            if not pathElement", "                # Skip the trailing \"\"", "                continue", "", "            currentPath += pathElement + path.sep", "            stat = statFile currentPath", "", "            if stat and not stat.isDirectory()", "                throw new CoverageError(\"Can't create directory #{currentPath}: file already exists.\")", "", "            if not stat", "                # Create the directory", "                fs.mkdirSync currentPath, mode", "", "# Converts a path like \"./foo/\"", "exports.abbreviatedPath = (pathName) ->", "    needTrailingSlash = no", "", "    splitPath = pathName.split path.sep", "", "    if splitPath[-1..-1][0] == ''", "        needTrailingSlash = yes", "        splitPath.pop()", "", "    filename = splitPath.pop()", "", "    answer = \"\"", "    for pathElement in splitPath", "        if pathElement.length == 0", "            answer += \"\"", "        else if pathElement is \"..\"", "            answer += pathElement", "        else if exports.startsWith pathElement, \".\"", "            answer += pathElement[0..1]", "        else", "            answer += pathElement[0]", "        answer += path.sep", "", "    answer += filename", "", "    if needTrailingSlash", "        answer += path.sep", "", "    return answer", "", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["n/c/t/t/a/foo.coffee"]) {
    _$jscoverage["n/c/t/t/a/foo.coffee"] = [];
    _$jscoverage["n/c/t/t/a/foo.coffee"][1] = 0;
}

_$jscoverage["n/c/t/t/a/foo.coffee"].source = ["a = \"7\"", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["n/c/t/t/b/bar.coffee"]) {
    _$jscoverage["n/c/t/t/b/bar.coffee"] = [];
    _$jscoverage["n/c/t/t/b/bar.coffee"][1] = 0;
}

_$jscoverage["n/c/t/t/b/bar.coffee"].source = ["b = \"7\"", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["n/c/t/t/dynamic.coffee"]) {
    _$jscoverage["n/c/t/t/dynamic.coffee"] = [];
    _$jscoverage["n/c/t/t/dynamic.coffee"][1] = 0;
    _$jscoverage["n/c/t/t/dynamic.coffee"][7] = 0;
    _$jscoverage["n/c/t/t/dynamic.coffee"][8] = 0;
}

_$jscoverage["n/c/t/t/dynamic.coffee"].source = ["require(\"../../src/coffeeCoverage\").register(", "  path: \"relative\"", "  basePath: __dirname", "  exclude: [\"b\"]", ")", "", "require './a/foo.coffee'", "require './b/bar.coffee'", ""];

if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if ((typeof global !== 'undefined') && (typeof global._$jscoverage === 'undefined')) {
    global._$jscoverage = _$jscoverage
} else if ((typeof window !== 'undefined') && (typeof window._$jscoverage === 'undefined')) {
    window._$jscoverage = _$jscoverage
}
if (! _$jscoverage["server.coffee"]) {
    _$jscoverage["server.coffee"] = [];
}

_$jscoverage["server.coffee"].source = [""];

