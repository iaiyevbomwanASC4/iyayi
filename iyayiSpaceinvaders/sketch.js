// function setup() {
//     createCanvas(windowWidth,windowHeight)
//     background(25,25,25)
//     fill("red")
//     rect(windowWidth/2,700,30,50)
// }
var shipx = 675
var shipy = 675

var alienx = 90
var alieny = 100

function setup() {
  createCanvas(1000,windowHeight)
  background(25,25,25)
}

function draw() {
    background(25,25,25)
    if (keyIsDown(LEFT_ARROW))
    shipx -= 5

    if (keyIsDown(RIGHT_ARROW))
    shipx += 5

    if (shipx < 0)
    shipx = windowWidth

//   if (keyIsDown(UP_ARROW))
//     y -= 5

//   if (keyIsDown(DOWN_ARROW))
//     y += 5

    fill("red")
    rect(shipx,shipy,30,50)

for (var row = 0; row < 4; row++) {
     for (var col = 0; col < 10; col++) {
        rect(alienx,alieny,50,30)
        alienx = alienx + 70    
 }
    alienx = 90
    alieny = alieny + 60  
}
    alieny = 100
    alienx = alienx + 3
    if (alienx >= 1000) {
        alienx = alienx-3
    }
    else if (alienx <= 90) {
        alienx = alienx + 3
    }}