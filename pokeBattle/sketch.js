var colors = ["red", "yellow", "green", "navy", "brown", "pink"]
function setup() {
// background //
    createCanvas(1300,750)
    background("black")
// pokemon location //
    ellipse(350,450,400,200)
    ellipse(900,200,400,200)
// pokemon info bar //
    fill("grey")
    rect(300,125,300,75)
    rect(650,450,300,75)
// nav bar //
    rect(75,575,1125,150)
    fill("white")
    rect(100,600,500,100)
    rect(625,600,550,100)
    fill("black")
    textSize(25)
    text("Your Pokemon is battling Swampert.",105,625)
    
// pokemon //
    fill(random(colors))
    ellipse(400,400,200,200)
    fill("navy")
    ellipse(850,150,200,200)

}