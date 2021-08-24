const { profile } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name? Nicknames are also acceptable :\)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('what sport do you play?', (sport) => {
        rl.question('Which meal is your favourite \(eg: dinner, brunch, etc.\)', (meal) => {
          rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
              console.log(`${name} loves listening to ${music} while doing ${activity} or ${sport}, followed promptly by ${food} for ${meal}, which is what makes them so good at ${superPower}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});


