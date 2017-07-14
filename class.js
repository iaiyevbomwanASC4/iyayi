// function Pokemon(hp, level, type) {
//     this.hp = hp
//     this.level = level
//     this.type = type
// }

// var swampert = new Pokemon(110, 49, "water")

// console.log(swampert.hp)
// console.log(swampert.level)
// console.log(swampert.type)


function Artist(label, genre, album, song) {
    this.label = label
    this.genre = genre
    this.album = album
    this.song = song
}

var jayZ = new Artist("RocNation", "Rap/Hip-Hop", "'4:44'", "'The Story of O.J.'")

console.log("Jay Z is signed to " + jayZ.label + ". His music generally falls under the category of " + jayZ.genre + ". His most recent album to date is called " + jayZ.album + " which includes " + jayZ.song)