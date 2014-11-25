fs = require('fs')

handler = (req, res) ->
  fs.readFile __dirname + '/index.html', (err, data)->
    if err?
      res.writeHead(500)
      res.end('Error loading index.html')
    res.writeHead(200)
    res.end(data)

app = require('http').createServer(handler)
io = require('socket.io')(app)
app.listen 3000, ->
  console.log 'Server listening on 3000'
  


io.on 'connection', (socket) ->
  socket.emit 'welcome', "Welcome new User"
  socket.on 'my other event', (data)-> 
    console.log(data)
  


module.exports = app
