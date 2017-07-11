var myPokemonRoster = ["pikachu","gyarados","mewtwo","charizard","blastoise"]
var firstToFight = (myPokemonRoster[2])
var secondToFight = (myPokemonRoster[3])
myPokemonRoster.push("geodude")
myPokemonRoster.pop()
for (var i = 0; i < myPokemonRoster.length; i++){
    console.log(myPokemonRoster[i])
}
for (var i = myPokemonRoster.length; i < 0; i--){
    console.log(myPokemonRoster[i])
}