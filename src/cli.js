import readlineSync from 'readline-sync';

const getName = (name = 'John') => {
  const gamerName = _.capitalize(readlineSync.question('May I have your name? '));
  if (typeof gamerName !== 'undefined' && gamerName !== '') {
    gamerName = gamerName[0].toUpperCase() + gamerName.slice(1);
    console.log(`Hello, ${gamerName}!`);
    return gamerName;
  }
  console.log(`Hello, I will call you ${name}.`);
  return name;
};

export default getName;
