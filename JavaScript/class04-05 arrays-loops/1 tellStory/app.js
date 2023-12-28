// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert


function tellStory(name, mood, activity) {
    let storyElementsArray = [name, mood, activity];
    let story = `Hello! My name is ${storyElementsArray[0]}, I'm a very nice person. Today I'm feeling ${storyElementsArray[1]} and for the whole day I'll be doing ${storyElementsArray[2]}.`;
    return story;
}

let completeStory = tellStory("Konstantin", "happy", "studying");
console.log(completeStory);