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

(function() {
  var Game, _,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["Game.coffee"][1]++;

  _ = require('lodash');

  _$jscoverage["Game.coffee"][3]++;

  module.exports = Game = (function() {
    var _GAMECOUNT;

    _$jscoverage["Game.coffee"][4]++;

    _GAMECOUNT = 0;

    _$jscoverage["Game.coffee"][5]++;

    function Game(owner, length) {
      var Board;
      this.owner = owner;
      this.movePlayer = __bind(this.movePlayer, this);
      this.diceRoll = __bind(this.diceRoll, this);
      _$jscoverage["Game.coffee"][6]++;
      this.id = _GAMECOUNT++;
      _$jscoverage["Game.coffee"][8]++;
      this.players = {
        1: {
          user: this.owner != null ? this.owner : this.owner = 1,
          position: 1,
          coins: 0
        }
      };
      _$jscoverage["Game.coffee"][14]++;
      Board = require('./Board.coffee');
      _$jscoverage["Game.coffee"][17]++;
      if (length == null) {
        length = 'short';
      }
      _$jscoverage["Game.coffee"][18]++;
      this.board = (function() {
        switch (length) {
          case 'long':
            _$jscoverage["Game.coffee"][19]++;
            return new Board(this.id, 60, this.players);
          case 'medium':
            _$jscoverage["Game.coffee"][20]++;
            return new Board(this.id, 40, this.players);
          case 'short':
            _$jscoverage["Game.coffee"][21]++;
            return new Board(this.id, 20, this.players);
        }
      }).call(this);
    }

    Game.prototype.diceRoll = function(lowerLimit, upperLimit) {
      _$jscoverage["Game.coffee"][25]++;
      if (lowerLimit == null) {
        lowerLimit = 0;
      }
      _$jscoverage["Game.coffee"][26]++;
      if (upperLimit == null) {
        upperLimit = 10;
      }
      _$jscoverage["Game.coffee"][28]++;
      return Math.floor(Math.random() * (_$jscoverage["Game.coffee"][29]++, upperLimit - lowerLimit) + lowerLimit);
    };

    Game.prototype.addPlayer = function(user) {
      var playercount;
      _$jscoverage["Game.coffee"][33]++;
      playercount = _.size(this.players);
      _$jscoverage["Game.coffee"][35]++;
      this.players[++playercount] = {
        user: user.id,
        position: 1,
        coins: 0
      };
      _$jscoverage["Game.coffee"][41]++;
      return console.log("player added");
    };

    Game.prototype.movePlayer = function(playerNumber, amount) {
      var oldCoins, position;
      _$jscoverage["Game.coffee"][44]++;
      if (amount == null) {
        amount = this.diceRoll();
      }
      _$jscoverage["Game.coffee"][45]++;
      this.players[playerNumber].position += amount;
      _$jscoverage["Game.coffee"][46]++;
      position = this.players[playerNumber].position;
      _$jscoverage["Game.coffee"][47]++;
      oldCoins = this.players[playerNumber].coins;
      _$jscoverage["Game.coffee"][48]++;
      this.board.giveCoin(position, playerNumber);
      _$jscoverage["Game.coffee"][49]++;
      return console.log("Player " + playerNumber + " moved " + amount + " spaces\n and received " + (_$jscoverage["Game.coffee"][50]++, this.board.Spaces[position].coins) + " coins");
    };

    return Game;

  })();

}).call(this);
