import readlineSync from 'readline-sync';

export const even = (name = 'Gamer') => {
    let countAnswer = 0;
    const isEven = (num) => num % 2 === 0;
    let getRandomNum = (max = 100) => Math.floor(Math.random() * max);

    const advertisement = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 1; i <= 3; i++) {
        let numQuestion = getRandomNum();
        let question = readlineSync.question(`Question: ${numQuestion}`);
        let gamerAnswer = readlineSync.question(`Answer: `);
        
        
        let correctAnswer = isEven(numQuestion) ? 'yes' : 'no';

        console.log(`${numQuestion} ${correctAnswer} ${gamerAnswer}`)
        

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