
fs = require 'fs'
_ = require 'lodash'

handler = (req, res) ->

  fs.readFile __dirname + '/index.html', (err, data)->
    if err?
      res.writeHead(500)
      res.end('Error loading index.html')
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(data)


http = require 'http'
express = require 'express'
teacup = require 'teacup/lib/express.js'


app = express()

app.set 'views', __dirname + '/../views'
app.set 'view engine', 'coffee'
app.engine "coffee", require('teacup/lib/express').renderFile
app.use express.static __dirname + '/../public'
app.use express.static __dirname + '/../coffee'
app.get '/', (req,res)->
	res.render 'index.coffee'



Server = http.createServer(app).listen 3000, ->
  		console.log 'Server listening on 3000'


io = require('socket.io')(Server)

	
users = {}
numOfUsers = _.size(users)

io.on 'connection', (socket) ->
  socket.emit 'welcome', "Welcome new User"
  socket.on 'my other event', (data)-> 
    console.log(data)
  


module.exports = {app,Server} 
