function displayStats() {
    $('#stats').text('It works');
}

function setup(params) {
    $('body').append("<h1>Welcome to the Ogre Game</h1>");
    $('body').append('<div><h3>Stats</h3><p id="stats"></p></div>');
    $('body').append("<button onclick='displayStats()'>Attack</button>");
    
}