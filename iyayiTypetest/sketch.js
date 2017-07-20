var inp
var question = "Can you spell my name?"
var phrase = "Iyayi"
var points = "You've got points"

function setup() {
    createCanvas(windowWidth,windowHeight)
    background(random(255))
    textSize(50)
    text(question,150,50)
    inp = createInput('', "text")
    inp.position(150,200)
    text(points, 150, 350)
}

function keyTyped() {
    // console.log(key)
    if (keyCode === ENTER) {
    if (phrase === inp.value()) {
        alert("Congrats")
        text(points + 10)
    } else {
        alert("Try again")
    }
    }

    }