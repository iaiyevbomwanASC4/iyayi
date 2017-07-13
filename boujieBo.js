var prompt = require('prompt-sync')()

var boCat = "Pablo"
var cash = 1000
var name = prompt("What's poppin cuz. What's your name? ")

while (cash > 0){
    var item = prompt("What you tryna cop?" )
    console.log("Ooh I like that!")
    cash = cash - 100
}