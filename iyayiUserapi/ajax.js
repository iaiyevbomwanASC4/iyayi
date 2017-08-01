const url = "https://randomuser.me/api/"
//var userFirstName =

function setup() {
    $.getJSON(url,
    function(data) {
    $('body').append("<h1>Hello, my name is " + data.results[0].name.first + "</h1>")
    $("body").append(`<img src = '${data.results[0].picture.large} '>`)
    })
}

$(document).ready(setup)
      