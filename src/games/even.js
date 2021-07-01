import {getRandomNum, isEven} from '../lib.js'

export const even = (name) => {
  const randomNum = getRandomNum();
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [randomNum, correctAnswer];
};