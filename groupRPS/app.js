var username = "";
var choices = ["rock", "paper","scissors"]
var results = " " ;
var gamesWon = " ";
var p1Choice = " ";
var p2Choice = choices[Math.floor(Math.random()*3)]
console.log(p2Choice)
$(document).ready(function(){
  username = prompt("What is your name?")
  getUserInfo()
  $(".who").append(username)
  if(p1Choice === p2Choice){
    results = "It's a tie"
    $(".results").append("<p>" + results + "</p>");
  }else if (p1Choice === "scissors"){
    if (p2Choice ==="rock"){
      results = "Rock beats Scissors"
      $(".results").append("<p>" + results + "</p>");
    }else{ results = "Scissors beats Paper"
    $(".results").append("<p>" + results + "</p>");
  }
  }else if (p1Choice === "rock"){
    if (p2Choice === "paper"){
      results = "Paper beats rock"
      $(".results").append("<p>" + results + "</p>");
    }else {
      results = "Rock beats Scissors"
      $(".results").append("<p>" + results + "</p>");
    }
  }else if (p1Choice === "paper"){
    if (p2Choice === "rock"){
      results = "Paper beats Rock"
      $(".results").append("<p>" + results + "</p>");
    }else{
      results = "Scissors beats Paper"
      $(".results").append("<p>" + results + "</p>");
    }
  }
  $(".results").append("<p>" + results + "</p>");
($(".zero").click(function(){
  var p2Choice = choices[Math.floor(Math.random()*3)]
  p1Choice = "rock"
  if(p1Choice === p2Choice){
    results = "It's a tie"
    $(".results").text( results );
    $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
  }else if (p1Choice === "rock"){
    if (p2Choice === "paper"){
      results = "Paper beats rock"
      gamesWon = gamesWon - 1
    sendNewScore()
      $(".results").text( results );
      $(".points").text("gamesWon: " + gamesWon )
      $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
    }else {
      results = "Rock beats Scissors"
      gamesWon = gamesWon + 10
      sendNewScore()
      $(".results").text( results );
       $(".points").text("gamesWon: " + gamesWon )
       $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
    }
  }
}))
$(".one").click(function(){
  var p2Choice = choices[Math.floor(Math.random()*3)]
  p1Choice = "paper"
  if(p1Choice === p2Choice){
    results = "It's a tie"
    $(".results").text( results );
    $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
    }else if (p1Choice === "paper"){
     if (p2Choice === "rock"){
      results = "Paper beats Rock"
       gamesWon = gamesWon + 10
       sendNewScore()
      $(".results").text( results );
       $(".points").text("gamesWon: " + gamesWon )
       $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
    }else{
      results = "Scissors beats Paper"
      gamesWon = gamesWon - 1
      sendNewScore()
      $(".results").text(results );
       $(".points").text("gamesWon: " + gamesWon  )
       $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
    }
    }
})
$(".two").click(function(){
  var p2Choice = choices[Math.floor(Math.random()*3)]
  p1Choice = "scissors"
  if(p1Choice === p2Choice){
    results = "It's a tie"
    $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
}else if (p1Choice === "scissors"){
    if (p2Choice ==="rock"){
      results = "Rock beats Scissors"
       gamesWon = gamesWon - 1
       sendNewScore()
      $(".results").text(results );
       $(".points").text("gamesWon: " + gamesWon )
        $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
       
    }else{ results = "Scissors beats Paper"
       gamesWon = gamesWon + 10
       sendNewScore()
    $(".results").text( results );
     $(".points").text("gamesWon: " + gamesWon  )
      $(".leaderBoard").text("-----------" + "Leaderboard" + "-----------" )
    }
  }
})
})
function getUserInfo(){
  let userInfo = firebase.database().ref("users/" + username.toLowerCase());
  userInfo.on("value", function(snapshot) {
  if(snapshot.val() === null){
  userInfo.set({
    "score" : gamesWon
  });
  } else {
    gamesWon = snapshot.val().score;
    console.log(gamesWon);
  }
});
}
function sendNewScore(){
  let userInfo = firebase.database().ref("users/" + username.toLowerCase());
  
  userInfo.set({
    "score" : gamesWon
  });
}
var db = firebase.database().ref("users")
db.orderByValue().limitToLast(3).on("child_added", function(row){
  $(".quien").append("   " + row.key+ ";" + row.val().score + "       |") 
})