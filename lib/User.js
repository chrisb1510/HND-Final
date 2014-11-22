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

(function() {
  var User,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _$jscoverage["User.coffee"][3]++;

  module.exports = User = (function() {
    var _USERCOUNT;

    _$jscoverage["User.coffee"][4]++;

    _USERCOUNT = 0;

    _$jscoverage["User.coffee"][5]++;

    function User(name) {
      this.name = name;
      this.createGame = __bind(this.createGame, this);
      _$jscoverage["User.coffee"][6]++;
      this.id = _USERCOUNT++;
      _$jscoverage["User.coffee"][7]++;
      if (this.name == null) {
        this.name = "user" + this.id;
      }
    }

    User.prototype.createGame = function(length) {
      var Game, game;
      _$jscoverage["User.coffee"][9]++;
      Game = require('./Game.coffee');
      _$jscoverage["User.coffee"][10]++;
      game = new Game(this.id, length);
      _$jscoverage["User.coffee"][11]++;
      console.log("game is created");
      _$jscoverage["User.coffee"][12]++;
      return game;
    };

    return User;

  })();

}).call(this);
