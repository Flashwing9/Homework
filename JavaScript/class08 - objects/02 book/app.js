/* Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML */
const readingStatus = {
    title: "robots of dawn",
    author: "Isaac Asimov",
    readingStatus: true,
    title2: "mockingjay",
    author2: "Suzanne Collins",

    whatAmIReading: function() {
        if (readingStatus === false) {
            console.log(`you still need to read ${this.title2} by ${this.author2}`);
        } else {
            console.log(`continue reading ${this.title} by ${this.author}`);
        }
    },
}

readingStatus.whatAmIReading();