require 'coffee-script/register'
require('coffee-coverage').register(
        path: 'abbr'
        basePath: __dirname
        exclude: [
        	'/test'
        	'/node_modules'
        	 '/.git']
        initAll: true
        
    )

chai = require 'chai'
should = require 'should'
sinon = require 'sinon'
sinonchai = require 'sinon-chai'
chai.use(sinonchai)

chai.config.includeStack = true
_ = require 'lodash'
describe "User", ->
	
	it "User file should exist", ->
		User = require './../User.coffee'

	it "user should be type of User",->
		User = require './../User.coffee'
		user = new User()
		user.should.be.instanceof User
	
	it "User should have a name",->
		User = require './../User.coffee'
		user = new User()
		user.name.should.not.equal ' '
	
	it "A user should be able to create a game",->
		Game = require './../Game.coffee'
		User = require './../User.coffee'
		user = new User()
		game = user.createGame()
		game.should.be.instanceof Game
	
describe "Game",->
	it "Game should exist", ->
		Game = require './../Game.coffee'
	
	it "game should be type of Game",->
		Game = require './../Game.coffee'
		game = new Game()
		game.should.be.instanceof Game
	
	it "A game should have an id",->
		Game = require './../Game.coffee'
		game = new Game()
		game.id.should.exist
	
	it "A game should have a unique id",->
		Game = require './../Game.coffee'
		game1 = new Game()
		game2 = new Game()
		game1.id.should.not.equal game2.id
	
	it "a game should store the creators User.id",->
		#create a user
		User = require './../User.coffee'
		user = new User()
		#create a game
		game = user.createGame()
		game.owner.should.equal user.id
	
	it "A games first player should be the owner",->
		User = require './../User.coffee'
		user = new User()
		#create a game
		game = user.createGame()
		_.size(game.players).should.equal 1
	
	it "A game should add players by id",->
		
		User = require './../User.coffee'
		
		gameCreator = new User()
		additionalPlayer = new User()
		
		game = gameCreator.createGame()
		
		game.addPlayer(additionalPlayer)
		_.size(game.players).should.equal 2
	
	it "a Game should contain a board",->
		
		User = require './../User.coffee'
		gameCreator = new User()
		additionalPlayer = new User()
		game = gameCreator.createGame()
		game.addPlayer(additionalPlayer)
		
		game.board.should.exist
	
	it "A game can be long(60),medium(40) or short(20) spaces long",->
		
		Game = require '../Game.coffee'
		longGame = new Game(null,'long')
		medGame = new Game(null,'medium')
		shortGame = new Game(null,'short')
		
		_.size(longGame.board.Spaces).should.equal 60
		_.size(medGame.board.Spaces).should.equal 40
		_.size(shortGame.board.Spaces).should.equal 20

	describe "Board",->
		it "It should exist",->
			
			Board = require '../Board.coffee'
			board = new Board()
			board.should.be.instanceof Board
		
		it "A Board should contain spaces",->
			
			Board = require '../Board.coffee'
			board = new Board()
			board.Spaces?
		
		it "Spaces length should be defined from constructor",->
			Board = require '../Board.coffee'
			board = new Board(1,10,{})
			_.size(board.Spaces).should.equal 10
		
		it "Players should start on square 1",->
			User = require './../User.coffee'
			user = new User()
			user2 = new User()
			game = user.createGame('short')
			game.players[1].position.should.equal 1
			
			game.addPlayer(user2)	
			game.players[2].position.should.equal 1
			

		it "A player should move by a given amount",->
			User = require './../User.coffee'
			user = new User()
			user2 = new User()
			game = user.createGame('short')
			
			game.addPlayer(user2)
			
			game.movePlayer(1,5)
			game.movePlayer(2,2)
			
			game.players[1].position.should.equal 6
			game.players[2].position.should.equal 3
		
		describe "dice roll",->
			it "should create a random number",->
				diceRoll = ()->
					Math.random()
				(diceRoll()).should.not.equal diceRoll()
			it "should be a whole number within a defined range",->
				
				User = require './../User.coffee'
				user = new User()
				user2 = new User()
				
				game = user.createGame('short')
				game.addPlayer(user2)
				lowerLimit = 5
				upperLimit = 20
				(game.diceRoll(5,20)).should.be.within(lowerLimit, upperLimit)
			
		describe "Move a player by a dice roll",->
			it "should move a given player by a random amount",->
					User = require './../User.coffee'
					user = new User()
					user2 = new User()
				
					game = user.createGame('short')
					game.addPlayer(user2)
					lowerLimit = 5
					upperLimit = 20

					spyOn_Roll = sinon.spy(game,'diceRoll') 
					game.movePlayer(1)
					spyOn_Roll.called.should.equal true
					game.players[1].position.should.not.equal 1
					
					game.movePlayer(2,5)
					game.players[2].position.should.equal 6
					# console.log game.players[1],game.players[2]

		describe "A varying number of coins will be given on each space",->
			it "should generate coins randomly",->
				User = require '../User.coffee'
				user = new User()
				game = user.createGame()
				game2 = user.createGame()
				
				firstsample  = _.sample( game.board.Spaces, 4 )
				res = _.pluck firstsample, 'coins'

				secondsample = _.sample( game2.board.Spaces, 4 )
				res2 = _.pluck secondsample, 'coins'
				
				# console.log res,res2
				res.should.not.equal res2
 			it "a player starts with 0 coins",->
 				User = require '../User.coffee'
				user = new User()
				user2 = new User()
				game = user.createGame()	
				game.addPlayer user2

				game.players[1].coins.should.equal 0
				game.players[2].coins.should.equal 0

			it "A player accumulates coins by landing on spaces",->
				User = require '../User.coffee'
				user = new User()
				user2 = new User()
				game = user.createGame()	
				game.addPlayer user2

				coinsToGive = game.board.Spaces[7].coins
				
				spyOn_giveCoin = sinon.spy(game.board,'giveCoin')
				game.movePlayer(1,6)
				spyOn_giveCoin.should.have.been.calledWith 7,1

				coinsToGiveSecond = game.board.Spaces[13].coins
				game.movePlayer(1,6)
				
				spyOn_giveCoin.should.have.been.calledWith 13,1
				game.players[1].coins.should.equal coinsToGive+coinsToGiveSecond

				spyOn_giveCoin.should.have.been.called.twice

			it "should end when all players reach the final space",->



