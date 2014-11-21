// Generated by CoffeeScript 1.8.0
(function() {
  var Game, _,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _ = require('lodash');

  module.exports = Game = (function() {
    var _GAMECOUNT;

    _GAMECOUNT = 0;

    function Game(owner, length) {
      var Board;
      this.owner = owner;
      this.movePlayer = __bind(this.movePlayer, this);
      this.diceRoll = __bind(this.diceRoll, this);
      this.id = _GAMECOUNT++;
      this.players = {
        1: {
          user: this.owner != null ? this.owner : this.owner = 1,
          position: 1,
          coins: 0
        }
      };
      Board = require('./Board.coffee');
      if (length == null) {
        length = 'short';
      }
      this.board = (function() {
        switch (length) {
          case 'long':
            return new Board(this.id, 60, this.players);
          case 'medium':
            return new Board(this.id, 40, this.players);
          case 'short':
            return new Board(this.id, 20, this.players);
        }
      }).call(this);
    }

    Game.prototype.diceRoll = function(lowerLimit, upperLimit) {
      if (lowerLimit == null) {
        lowerLimit = 0;
      }
      if (upperLimit == null) {
        upperLimit = 10;
      }
      return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    };

    Game.prototype.addPlayer = function(user) {
      var playercount;
      playercount = _.size(this.players);
      this.players[++playercount] = {
        user: user.id,
        position: 1,
        coins: 0
      };
      return console.log("player added");
    };

    Game.prototype.movePlayer = function(playerNumber, amount) {
      var pos;
      if (amount == null) {
        amount = this.diceRoll();
      }
      this.players[playerNumber].position += amount;
      pos = this.players[playerNumber].position;
      return this.board.giveCoin(pos, playerNumber);
    };

    return Game;

  })();

}).call(this);
