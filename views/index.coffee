
teacup = require 'teacup'


{renderable,render, raw, js, css, html, head, title, body, div,script, coffeescript} = teacup

mySection = renderable ()->
  { section,h1 } = teacup

  section '#testSection', ->
    h1 "This is a Section Title"

myCanvas = renderable ()->
  {section,h1,canvas} = teacup
  section '#CanvasSection', ->
    h1 'This is the Canvas entry'
    canvas '#myCanvas', width:400,height:400
  script type:'text/coffee-script', src:'./User.coffee'
  	

    	



	

myFooter = renderable ()->
  {p,footer,script} = teacup
  footer ->
    p 'this is a footer'
    script src:'coffee-script.js'


    

module.exports = renderable ({}) ->
  html ->
    head ->
      title 'Teacup'
      script src:"http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
      script src:"teacup.js"
      
    body ->
      div '#app'
      myCanvas ->
  	  myFooter ->
    	



template = renderable (items)->
  ul ->
    li item for item in items

#unused
myHead = renderable () ->
  { head, title, script} = teacup

  head ->
    title 'Welcome'
    script src: '/js/client/client.js'






main = renderable ()->
  {h1,p,div} = teacup
  h1 "This is a Body Title"

  mySection ->
  div '#testdiv', ->
    p 'this div renders'
  myCanvas ->

  myFooter ->



