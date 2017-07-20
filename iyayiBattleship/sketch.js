var x = 0;//index x
var y = 0;//index y
var userRow 

var randomX = Math.floor(Math.random()*7)*100;
var randomY = Math.floor(Math.random()*7)*100;
var secretRow = Math.floor(Math.random()*7)

function setup() {
    createCanvas(1000,1000);
    for(var row = 0; row < 9; row++){ //getting the row
        for( var col = 0; col < 7; col++){
            fill("grey"); //getting the column
            rect(x,y,100,100);
            y+= 100;
        }
        y =0;
        x+=100;
    }

}

//var value = 0;

function mouseClicked() {
  if (mouseY <= 100) {
      userRow = 0
  } else if (mouseY <= 200) {
      userRow = 1
  } else if (mouseY <= 300) {
      userRow = 2
  } else if (mouseY <= 400) {
      userRow = 3
  } else if (mouseY <= 500) {
      userRow = 4
  } else if (mouseY <= 600) {
      userRow = 5
  } else if (mouseY <= 700) {
      userRow = 6
  } else if (mouseY <= 800) {
      userRow = 7
  } else if (mouseY <= 900) {
      userRow = 8
  } else if (mouseY <= 700) {
      userRow = 9
}
if (userRow === secretRow) {
    alert("You sunk the battleship")
}
}