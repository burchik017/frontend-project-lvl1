import { getRandomNum } from '../lib.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

export const gcd = () => {
  const firstNum = getRandomNum(99);
  const secondNum = getRandomNum(99);
  const maxDivisor = getGcd(firstNum, secondNum);

  return [`${firstNum} ${secondNum}`, maxDivisor];
};
