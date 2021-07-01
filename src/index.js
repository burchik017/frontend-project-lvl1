import { getAnswer, checkAnswer } from './lib.js';
import getName from './cli.js';

const runGame = (game, rule) => {
    console.log('Welcome to the Brain Games!');
    let name = getName();

    console.log(rule);

    let counter = 0;
    let isCorrect = true;
    const countOfRounds = 3;
    
    while (isCorrect && counter < countOfRounds) {
        const data = game();
        let [question, correctAnswer] = data;

        console.log(`Question: ${question}`);
        const userAnswer = getAnswer();
        isCorrect = checkAnswer(name, userAnswer, correctAnswer);
        counter += 1;
    }
    if (isCorrect) {
        console.log(`Congratulations, ${name}!`);
    }

  return isCorrect;
};

export default runGame;
  