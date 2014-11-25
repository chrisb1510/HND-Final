fs = require 'fs'
http = require 'http'
socketio = require 'socket.io'





myGame = http.createServer (request,response) ->
    response.writeHead 200,'Content-type': 'text/html'
    fs.readFile "#{__dirname}/index.html",(err,data)->
        if err   
            response.writeHead 500
            response.end "no index.html"
        response.end data
            
myGame.listen 3000, ->
    console.log "Welcome server started on\n 
	 localhost:3000" 
 
        
    

myGame.socket = socketio.listen myGame	








 