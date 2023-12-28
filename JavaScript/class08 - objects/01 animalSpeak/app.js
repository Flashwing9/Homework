/*CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs */
const animal = {
    name: "cow",
    kind: "milka",
    speak: function(speak) {
        console.log(speak);
    }
}

animal.study("mooo");

const enterAnimal = prompt("choose an animal");
const enterKind = prompt("choose the kind");
const whatItSoundsLike = prompt("choose what it will say");

