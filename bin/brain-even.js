import readlineSync from 'readline-sync';

export const even = (name) => {
  let countAnswer = 0;
  const isEven = (num) => num % 2 === 0;
  const getRandomNum = (max = 100) => Math.floor(Math.random() * max);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const numQuestion = getRandomNum();
    console.log(`Question: ${numQuestion}`);
    const gamerAnswer = readlineSync.question('Answer: ');
    const correctAnswer = isEven(numQuestion) ? 'yes' : 'no';
    if (correctAnswer === gamerAnswer) {
      console.log('Correct!');
      countAnswer += 1;
      if (countAnswer === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`"${gamerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}" .
      Let's try again, ${name}`);
      break;
    }
  }
};
