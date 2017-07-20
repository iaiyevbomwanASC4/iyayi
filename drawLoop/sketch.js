var x = 0
function setup() {
    createCanvas(windowWidth, windowHeight)
    background("red")
}

function draw() {
    background("blue")
    fill(100, 0, 0)
    ellipse(x, x, x)
    x = x + 7
    if (x > width) {
        x = 0
    }
}