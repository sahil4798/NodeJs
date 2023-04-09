const jokes = require("give-me-a-joke");

const colors = require("colors");
// console.log(jokes);

// console.log(jokes.getRandomCNJoke());
//Why not working

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
  //   console.log(colors.rainbow(joke));
});
