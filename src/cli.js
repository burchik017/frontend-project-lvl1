import readlineSync from 'readline-sync';
import { even } from '../bin/brain-even.js';

// Wait for user's response.

export const answer = () => {
  const gamerName = readlineSync.question('Welcome to the Brain Games. May I have your name? ');
  if (typeof gamerName !== 'undefined' && gamerName !== '') {
    console.log(`Hi ${gamerName}!`);
    even(gamerName);
  } else {
    readlineSync.question('Something went wrong, my hand must have twitched. One more time? ');
  }
};