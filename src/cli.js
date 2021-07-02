import readlineSync from 'readline-sync';

const getName = (name = 'Gamer') => {
  let gamerName = readlineSync.question('May I have your name? ');
  if (typeof gamerName !== 'undefined' && gamerName !== '') {
    gamerName = gamerName[0].toUpperCase() + gamerName.slice(1);
    console.log(`Hi ${gamerName}!`);
    return gamerName;
  }
  console.log(`Hello, I will call you ${name}.`);
  return name;
};

export default getName;
