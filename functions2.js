// Declaring random numbers from 0 - 11 //
function ii(number){
    var randomNumber = Math.random() * number
    var result = Math.floor(randomNumber)
    return result
}

console.log(ii(11))