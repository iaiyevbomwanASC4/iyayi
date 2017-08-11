var name = prompt("What do you call yourself?");
var favFood = prompt("What would say is your favorite food?");

firebase.database().ref(name).set(
    {
        food: favFood
    }
)