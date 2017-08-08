const choices = ["rock", "paper", "scissors"]
var score;
var p1 = choices[0]
const cpu = choices[Math.floor(Math.random()*choices.length)]
console.log(cpu)

function rock() {
    alert("You chose Rock!")
}

function paper() {
    alert("You chose Paper!")
}

function scissors() {
    alert("You chose Scissors!")
}

ction determineWinner(a, b) {
    // Make computer guess and save to p2Choice
    if (p1 === cpu) {
        alert("It's a tie!"); 
    } else if ( === "scissors") {
        if (cpu === "rock") {
            alert("CPU wins");
            alert("Rock beats scissors");
            score = score - 1;
            $('#span1').append(score)
        } else {
            alert("You win");
            alert("Scissors beats paper");
            score = score + 1;
            $('#span1').append(score)
        }
    } else if (p1 === "rock") {
        if (cpu === "scissors") {
            alert("You wins");
            alert("Rock beats scissors");
            score = score + 1;
            $('#span1').append(score)
        } else {
            alert("Player one loses");
            alert("Player two wins");
            score = score - 1;
            $('#span1').append(score)
        }
    } else if (p1 === "paper") {
        if (cpu === "scissors") {
            alert("CPU wins");
            alert("Scissors beats paper");
            score = score - 1;
            $('#span1').append(score)
        } else {
            alert("PLayer one wins");
            alert("Player two loses");
            score = score + 1;
            $('#span1').append(score)
        }
    }
}