import readlineSync from 'readline-sync';

// Wait for user's response.

export const answer = () => {
  const userName = readlineSync.question('Welcome to the Brain Games. May I have your name? ');
  console.log(`Hi ${userName}!`);
};
