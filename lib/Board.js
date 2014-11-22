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

(function() {
  var Board;

  _$jscoverage["Board.coffee"][1]++;

  module.exports = Board = (function() {
    var COIN_DEFAULTS;

    _$jscoverage["Board.coffee"][3]++;

    COIN_DEFAULTS = {
      lowerLimit: 1,
      upperLimit: 10
    };

    _$jscoverage["Board.coffee"][7]++;

    function Board(gameId, numOfSpaces, players) {
      var coinAmount;
      this.gameId = gameId;
      this.players = players;
      _$jscoverage["Board.coffee"][8]++;
      this.Spaces = {};
      _$jscoverage["Board.coffee"][11]++;
      this.Spaces = (function() {
        var _i, _results;
        _results = [];
        for (_i = 1; 1 <= numOfSpaces ? _i <= numOfSpaces : _i >= numOfSpaces; 1 <= numOfSpaces ? _i++ : _i--) {
          _$jscoverage["Board.coffee"][12]++;
          coinAmount = function() {
            var value;
            _$jscoverage["Board.coffee"][13]++;
            if (_i === 1) {
              _$jscoverage["Board.coffee"][14]++;
              value = 0;
            } else {
              _$jscoverage["Board.coffee"][16]++;
              value = Math.floor(Math.random() * (COIN_DEFAULTS.upperLimit - COIN_DEFAULTS.lowerLimit) + COIN_DEFAULTS.lowerLimit);
            }
            _$jscoverage["Board.coffee"][17]++;
            return value;
          };
          _$jscoverage["Board.coffee"][21]++;
          _results.push(this.Spaces[_i] = {
            num: _i,
            text: (_$jscoverage["Board.coffee"][23]++, "space" + _i),
            coins: coinAmount()
          });
        }
        return _results;
      }).call(this);
    }

    Board.prototype.giveCoin = function(space, player) {
      var res;
      _$jscoverage["Board.coffee"][29]++;
      res = this.players[player].coins += this.Spaces[space].coins;
      _$jscoverage["Board.coffee"][30]++;
      console.log(this.players[player]);
      _$jscoverage["Board.coffee"][31]++;
      return res;
    };

    return Board;

  })();

}).call(this);
