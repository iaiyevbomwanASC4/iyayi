//var username = "";
var username = prompt("What is your name?")
firebase.database().ref('user/' + username).set({
    "score": 0
});

const choices = ["rock", "paper", "scissors"]
var gamesWon;
var p1 = choices[0]
const cpu = choices[Math.floor(Math.random()*choices.length)]
console.log(cpu)

function rock() {
    console.log("You chose Rock!")
    $('#choice').append("<p> You chose rock </p>")
    $('#cpuchoice').append("<p> CPU chose " + cpu + "</p>")
}

function paper() {
    console.log("You chose Paper!")
    $('#choice').append("<p> You chose paper </p>")
    $('#cpuchoice').append("<p> CPU chose " + cpu + "</p>")
}

function scissors() {
    console.log("You chose Scissors!")
    $('#choice').append("<p> You chose scissors </p>")
    $('#cpuchoice').append("<p> CPU chose " + cpu + "</p>")
}

// $('#cpuchoice').append("<p> CPU chose" + cpu + "</p>")

function determineWinner(p1, cpu) {
    // Make computer guess and save to cpu
    if (p1 === cpu) {
        alert("It's a tie!"); 
    } else if (p1 === "scissors") {
        if (cpu === "rock") {
            alert("CPU wins");
            score = score - 1;
            $('#score').append(score)
        } else {
            alert("You win");
            score = score + 1;
            $('#score').append(score)
        }
    } else if (p1 === "rock") {
        if (cpu === "scissors") {
            alert("You wins");
            score = score + 1;
            $('#score').append(score)
        } else {
            alert("CPU wins");
            score = score - 1;
            $('#score').append(score)
        }
    } else if (p1 === "paper") {
        if (cpu === "scissors") {
            alert("CPU wins");
            score = score - 1;
            $('#score').append(score)
        } else {
            alert("You win");
            score = score + 1;
            $('#score').append(score)
        //sendNewScore()
        }
    }
}
// function sendNewScore(){
//     let userInfo = firebase.database().ref(username);

//     userInfo.set({
//         "score": wins
//     });
// }
// var reset = function() {
//     loses = 0;
//     wins = 0;
//     document.getElementById("wins").inerHTML=wins;
//     document.getElementById("loses").innerHTML=loses;
// };

// var database = firebase.database().ref()
// database.on("child_added",function(rowData) {
//     console.log(rowData.score)
//   //  $()
