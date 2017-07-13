var prompt = require('prompt-sync')()

var mashArray = ["The Great Maze", "Congo Jungle", "Eagleland", "Yoshi's Island"]
var q1 = [8, 11]
var q2 = ["Bowser", "Donkey Kong", "Mario"]

function questions(){
    var ques1 = "Who will you choose to fight? "
    var ques2 = "How many times will you attack? "
    var ans1 = prompt(ques1)
    console.log([q1])
    var ans2 = prompt(ques2)
    console.log([q2])
}

