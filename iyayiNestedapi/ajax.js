const randurl = "https://randomuser.me/api/"


function setup() {
    
    $.getJSON(randurl,
    function(data) {
        var nat = data.results[0].nat
        const naturl = "https://restcountries.eu/rest/v2/alpha?codes=" + nat
    //get name and pic
        $('body').append("<h1>Hello, my name is " + data.results[0].name.first + ". Can you guess where I'm from?</h1>")
        $("body").append(`<img src = '${data.results[0].picture.large} '>`)
    
    $.getJSON(naturl,
        function(data) {
    //get country flag
            $('body').append("<h2>Look at the flag and guess my country.</h2>")
            $('body').append(`<img src = '${data[0].flag}'>`)
            $('body').append("<h2>If you guessed " + data[0].name + " you were right.</h2>")
    })
    })

   
}

$(document).ready(setup)
      